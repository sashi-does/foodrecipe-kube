"use client"

import { useState } from "react"
import axios from "axios"
import { Search, ChefHat, Utensils } from "lucide-react"

function GetRecipeComponent() {
  const [recipe, setRecipe] = useState(null)
  const [recipeId, setRecipeId] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setRecipeId(e.target.value)
    // Clear previous results when changing ID
    if (recipe) setRecipe(null)
    if (error) setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await axios.get(`http://localhost:30025/api/recipes/${recipeId}`)
      setRecipe(response.data)
    } catch (error) {
      console.error("Error fetching recipe:", error)
      setError("Recipe not found. Please check the ID and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={recipeId}
            onChange={handleChange}
            placeholder="Enter recipe ID to retrieve"
            className="pl-10 py-3 w-full border-0 bg-gray-50 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg ${
            isLoading ? "opacity-75 cursor-not-allowed" : "hover:from-orange-600 hover:to-red-600"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : "Get Recipe"}
        </button>
      </form>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {recipe && (
        <div className="mt-6 animate-fadeIn">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-orange-100">
            <div className="bg-gradient-to-r from-orange-400 to-red-500 px-6 py-4">
              <h3 className="text-xl font-bold text-white">Recipe Details</h3>
            </div>

            <div className="p-6 space-y-4">
              {/* Recipe Content */}
              <div className="space-y-2">
                <div className="flex items-start">
                  <ChefHat className="h-5 w-5 text-orange-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Instructions</h4>
                    <p className="text-gray-700 whitespace-pre-line">{recipe.content}</p>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div className="space-y-2">
                <div className="flex items-start">
                  <Utensils className="h-5 w-5 text-orange-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Ingredients</h4>
                    <ul className="list-disc list-inside text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-1">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-700">
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Recipe Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-medium">{recipe.cuisine.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Cuisine</p>
                    <p className="font-medium text-gray-900">{recipe.cuisine}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 font-medium">{recipe.dietaryTag.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Dietary</p>
                    <p className="font-medium text-gray-900">{recipe.dietaryTag}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GetRecipeComponent
