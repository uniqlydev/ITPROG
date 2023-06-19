function addItemToLI(name) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode("Puta gumana"));

    /* For reference (This dev should be the one appened to the list @wassmer)
    <div class="item-container">
    <div class="name-price">
        <span class="name"><h3>Steak</h3></span>
        <span class="price"><h3>Php 900</h3></span>
    </div>
    
    <div class="button">
        <button id="minus-button" class="minus" onclick="removeQuantity()">-</button> <p id="quantity" class="quantity_class">0</p> <button id="add-button" class="add" onclick="addQuantity()">+</button>
    </div>
    </div>
    */ 

}

document.addEventListener('DOMContentLoaded', () => {
    const buttonmenu = document.getElementById('main-button');
    const sidesbutton = document.getElementById('sides-button');
    const drinksbutton = document.getElementById('drinks-button');

    /* get the order button then it's a POST method. Handle the post method then pass it sa customerRoutes.js 
    to create a customer */

    // Drinks
    const drinks1 = document.getElementById('drinks1');
    const drinks2 = document.getElementById('drinks2');
    const drinks3 = document.getElementById('drinks3');

    // Meals
    const meals1 = document.getElementById('meals1');
    const meals2 = document.getElementById('meals2');
    const meals3 = document.getElementById('meals3');

    // Sides
    const sides1 = document.getElementById('sides1');
    const sides2 = document.getElementById('sides2');
    const sides3 = document.getElementById('sides3');

    // This is for 'Main' menu
    buttonmenu.addEventListener('click', () => {
        alert("Puta gumana");
    });

    sidesbutton.addEventListener('click', () => {
        alert("Puta gumana");
    });

    drinksbutton.addEventListener('click', () => {
        alert("Puta gumana");
    });

    drinks1.addEventListener('click', () => {
        addItemToLI();
    });

    drinks2.addEventListener('click', () => {
        alert("Puta gumana");
    });

    drinks3.addEventListener('click', () => {
        alert("Puta gumana");
    });

    meals1.addEventListener('click', () => {
        alert("Puta gumana");
    });

    meals2.addEventListener('click', () => {
        alert("Puta gumana");
    });

    meals3.addEventListener('click', () => {
        alert("Puta gumana");
    });

    sides1.addEventListener('click', () => {
        alert("Puta gumana");
    });

    sides2.addEventListener('click', () => {
        alert("Puta gumana");
    });

    sides3.addEventListener('click', () => {
        alert("Puta gumana");
    });
});






