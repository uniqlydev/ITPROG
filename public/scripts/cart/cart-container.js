document.addEventListener('DOMContentLoaded', function() {
    var cartContainer = document.getElementById('cart-container');
    var mealbutton = document.getElementById('meal-button');
    var sidesbutton = document.getElementById('sides-button');
    var drinkbutton = document.getElementById('drink-button');

    mealbutton.addEventListener('click', this.appendChild {
        cartContainer.innerHTML = '<%- include(\'partials/meals-layer\') %>';
    });
    }
);