package com.ITprog.order.model;

import java.util.UUID;

public class Client {
    
    // Private Attributes
    private final UUID id;
    private final Meal meal;

    // Constructor
    public Client() {
        this.id = UUID.randomUUID();
        this.meal = new Meal();
    }

    public void AddMeal(String drink, String sides, String meal) {
        this.meal.setDrink(drink);
        this.meal.setSides(sides);
        this.meal.setMeal(meal);
    }

    public UUID getId() {
        return this.id;
    }


    public Meal getMeal() {
        return this.meal;
    }



    
}
