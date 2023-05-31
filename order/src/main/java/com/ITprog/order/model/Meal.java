package com.ITprog.order.model;

public class Meal {

    private double price;
    private String drink;
    private String sides;
    private String meal;

    // Constructor
    public Meal() {
        this.drink = "";
        this.sides = "";
        this.meal = "";
        this.price = 0.0;
    }

    public Meal(String drink, String sides, String meal) {
        this.drink = drink;
        this.sides = sides;
        this.meal = meal;
        this.price = 0.0;
    }

    public double getPrice() {
        return this.price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDrink() {
        return this.drink;
    }

    public void setDrink(String drink) {
        this.drink = drink;
    }

    public String getSides() {
        return this.sides;
    }

    public void setSides(String sides) {
        this.sides = sides;
    }

    public String getMeal() {
        return this.meal;
    }

    public void setMeal(String meal) {
        this.meal = meal;
    }



}
