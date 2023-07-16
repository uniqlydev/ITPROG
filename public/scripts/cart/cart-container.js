function loadMenu(foods) {
    
    for (var i = 0; i < foods.length; i++) {
        console.log(foods[i]);
    }
}

document.addEventListener('DOMContentLoaded', function() {

    var cartContainer = document.getElementById('cart-container');
    var mealbutton = document.getElementById('meal-button');
    var sidesbutton = document.getElementById('sides-button');
    var drinkbutton = document.getElementById('drink-button');


    loadMenu(foods);

    }
);