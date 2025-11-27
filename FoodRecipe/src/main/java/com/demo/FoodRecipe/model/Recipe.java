package com.demo.FoodRecipe.model;

import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "recipes")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content; // Instructions or recipe description

    @ElementCollection
    private List<String> ingredients; // Directly stored as text values

    private String cuisine;

    private String dietaryTag;

    // No-args constructor
    public Recipe() {
    }

    // All-args constructor
    public Recipe(Long id, String content, List<String> ingredients, String cuisine, String dietaryTag) {
        this.id = id;
        this.content = content;
        this.ingredients = ingredients;
        this.cuisine = cuisine;
        this.dietaryTag = dietaryTag;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    public String getDietaryTag() {
        return dietaryTag;
    }

    public void setDietaryTag(String dietaryTag) {
        this.dietaryTag = dietaryTag;
    }
}
