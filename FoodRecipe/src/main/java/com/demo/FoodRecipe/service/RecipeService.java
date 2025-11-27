package com.demo.FoodRecipe.service;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.FoodRecipe.exception.ResourceNotFoundException;
import com.demo.FoodRecipe.model.Recipe;
import com.demo.FoodRecipe.repository.RecipeRepository;

@Service
public class RecipeService {

    @Autowired
    private final RecipeRepository recipeRepository;

    @Autowired
    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    // Create a new recipe
    public Recipe addRecipe(Recipe recipe) {
        // You can add validation or preprocessing here if needed
        return recipeRepository.save(recipe);
    }

    // Get a recipe by ID
    public Recipe getRecipeById(Long id) {
        return recipeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Recipe not found with id " + id));
    }

    // Get all recipes (could be paginated in future)
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    // Search recipes by ingredients
    public List<Recipe> searchRecipesByIngredients(List<String> ingredients) {
        return recipeRepository.findByIngredientsIn(ingredients);
    }

    // Search recipes by cuisine
    public List<Recipe> searchRecipesByCuisine(String cuisine) {
        return recipeRepository.findByCuisineIgnoreCase(cuisine);
    }

    // Search recipes by dietary tag
    public List<Recipe> searchRecipesByDietaryTag(String dietaryTag) {
        return recipeRepository.findByDietaryTagIgnoreCase(dietaryTag);
    }

    // Combined search by ingredients, cuisine, and dietary tag
    public List<Recipe> searchRecipes(String ingredient, String cuisine, String dietaryTag) {
        if (ingredient != null && !ingredient.isEmpty()) {
            return searchRecipesByIngredients(Collections.singletonList(ingredient));
        } else if (cuisine != null && !cuisine.isEmpty()) {
            return searchRecipesByCuisine(cuisine);
        } else if (dietaryTag != null && !dietaryTag.isEmpty()) {
            return searchRecipesByDietaryTag(dietaryTag);
        }
        return getAllRecipes(); // Default to all recipes
    }

    // Update a recipe (if needed)
    public Recipe updateRecipe(Long id, Recipe recipeDetails) {
        Recipe recipe = getRecipeById(id);
        recipe.setContent(recipeDetails.getContent());
        recipe.setIngredients(recipeDetails.getIngredients());
        recipe.setCuisine(recipeDetails.getCuisine());
        recipe.setDietaryTag(recipeDetails.getDietaryTag());
        return recipeRepository.save(recipe);
    }

    // Delete a recipe
    public void deleteRecipe(Long id) {
        Recipe recipe = getRecipeById(id);
        recipeRepository.delete(recipe);
    }
    
}
