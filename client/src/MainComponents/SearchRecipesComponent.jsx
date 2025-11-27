"use client"

import { useState } from "react"
import axios from "axios"
import { Search, Filter, ChevronDown, X } from "lucide-react"

function SearchRecipesComponent() {
  const [searchParams, setSearchParams] = useState({
    ingredient: "",
    cuisine: "",
    dietaryTag: "",
  })
  const [recipes, setRecipes] = useState([])
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setSearchParams({ ...searchParams, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get("http://localhost:30025/api/recipes/search", {
        params: searchParams,
      })
      setRecipes(response.data)
    } catch (error) {
      console.error("Error searching recipes:", error)
    }
  }

  const clearSearch = () => {
    setSearchParams({
      ingredient: "",
      cuisine: "",
      dietaryTag: "",
    })
  }

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen)
  }

  return (
    <div className="w-full space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Main Search */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="ingredient"
            value={searchParams.ingredient}
            onChange={handleChange}
            placeholder="Search by main ingredient..."
            className="pl-10 pr-10 py-3 w-full border-0 bg-gray-50 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
          />
          {searchParams.ingredient && (
            <button
              type="button"
              onClick={() => setSearchParams({ ...searchParams, ingredient: "" })}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={toggleFilters}
            className="flex items-center text-gray-600 text-sm font-medium hover:text-orange-500 transition-colors"
          >
            <Filter className="h-4 w-4 mr-1" />
            Advanced Filters
            <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isFiltersOpen ? "rotate-180" : ""}`} />
          </button>

          {(searchParams.ingredient || searchParams.cuisine || searchParams.dietaryTag) && (
            <button type="button" onClick={clearSearch} className="text-sm text-gray-500 hover:text-orange-500">
              Clear all
            </button>
          )}
        </div>

        {/* Advanced Filters */}
        {isFiltersOpen && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl animate-fadeIn">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine</label>
              <input
                type="text"
                name="cuisine"
                value={searchParams.cuisine}
                onChange={handleChange}
                placeholder="Italian, Mexican, Asian..."
                className="w-full px-3 py-2 border-0 bg-white rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dietary Preference</label>
              <input
                type="text"
                name="dietaryTag"
                value={searchParams.dietaryTag}
                onChange={handleChange}
                placeholder="Vegetarian, Vegan, Gluten-free..."
                className="w-full px-3 py-2 border-0 bg-white rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium py-3 px-4 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all shadow-md hover:shadow-lg"
        >
          Find Recipes
        </button>
      </form>

      {/* Results */}
      {recipes.length > 0 && (
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-800">Recipes Found</h3>
            <span className="text-sm text-gray-500">{recipes.length} results</span>
          </div>

          <div className="grid gap-4 w-full">
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-lg text-gray-800 mb-2">{recipe.content.split("\n")[0] || "Recipe"}</h4>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-medium">Instructions:</span> {recipe.content}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Ingredients:</span>{" "}
                    <span className="text-gray-600">{recipe.ingredients.join(", ")}</span>
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge label={recipe.cuisine} color="orange" />
                    <Badge label={recipe.dietaryTag} color="green" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function Badge({ label, color }) {
  const colorClasses = {
    orange: "bg-orange-100 text-orange-800",
    green: "bg-green-100 text-green-800",
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[color]}`}>
      {label}
    </span>
  )
}

export default SearchRecipesComponent
