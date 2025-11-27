"use client"

import { useState } from "react"
import axios from "axios"
import { PlusCircle, ChevronDown, ChevronUp } from "lucide-react"

function AddRecipeComponent() {
  const [recipe, setRecipe] = useState({
    content: "",
    ingredients: "",
    cuisine: "",
    dietaryTag: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showTips, setShowTips] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "ingredients") {
      setRecipe({ ...recipe, [name]: value })
    } else {
      setRecipe({ ...recipe, [name]: value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Format ingredients as array before sending
      const formattedRecipe = {
        ...recipe,
        ingredients: recipe.ingredients.split(",").map((item) => item.trim()),
      }

      const response = await axios.post("http://localhost:30025/api/recipes", formattedRecipe)
      console.log("Recipe added:", response.data)
      setIsSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setRecipe({
          content: "",
          ingredients: "",
          cuisine: "",
          dietaryTag: "",
        })
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Error adding recipe:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleTips = () => {
    setShowTips(!showTips)
  }

  return (
    <div className="w-full space-y-6">
      {isSuccess && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md animate-fadeIn">
          <div className="flex">
            <div className="flex-shrink-0">
              <PlusCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">
                Recipe added successfully! Your culinary creation is now part of our collection.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-orange-50 rounded-xl p-4">
        <button type="button" onClick={toggleTips} className="flex justify-between items-center w-full text-left">
          <span className="font-medium text-orange-800">Recipe Writing Tips</span>
          {showTips ? (
            <ChevronUp className="h-5 w-5 text-orange-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-orange-500" />
          )}
        </button>

        {showTips && (
          <div className="mt-2 text-sm text-orange-700 space-y-1 animate-fadeIn">
            <p>• Be clear and specific with your instructions</p>
            <p>• List ingredients in order of use</p>
            <p>• Include cooking times and temperatures</p>
            <p>• Separate ingredients with commas</p>
            <p>• Add helpful tips for preparation</p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Recipe Instructions</label>
          <textarea
            name="content"
            value={recipe.content}
            onChange={handleChange}
            placeholder="Write detailed cooking instructions..."
            className="w-full px-4 py-3 border-0 bg-gray-50 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all min-h-[120px]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ingredients</label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            placeholder="List ingredients separated by commas (e.g., 2 cups flour, 1 tsp salt, 3 eggs)"
            className="w-full px-4 py-3 border-0 bg-gray-50 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine</label>
            <input
              type="text"
              name="cuisine"
              value={recipe.cuisine}
              onChange={handleChange}
              placeholder="Italian, Mexican, Thai..."
              className="w-full px-4 py-3 border-0 bg-gray-50 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Dietary Tag</label>
            <input
              type="text"
              name="dietaryTag"
              value={recipe.dietaryTag}
              onChange={handleChange}
              placeholder="Vegetarian, Vegan, Gluten-free..."
              className="w-full px-4 py-3 border-0 bg-gray-50 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className={`w-full flex justify-center items-center bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg ${
            isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:from-orange-600 hover:to-red-600"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding Recipe..." : "Add Recipe"}
        </button>
      </form>
    </div>
  )
}

export default AddRecipeComponent
