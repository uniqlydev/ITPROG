package com.ITprog.order.model;


import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Customer {

    private final UUID id; 
    private String [] meal = new String[3];

    public Customer(@JsonProperty("id") UUID id, 
                    @JsonProperty("meal") String meal, 
                    @JsonProperty("drinks") String drinks, 
                    @JsonProperty("sides") String sides) {
        this.id = id;
        this.meal[0] = meal;
        this.meal[1] = drinks;
        this.meal[2] = sides;
    }


    public UUID getId() {
        return this.id;
    }


    public String[] getMeal() {
        return this.meal;
    }

    public void setMeal(String[] meal) {
        this.meal = meal;
    }

}
