function addItemToLI(name, price) {
    const ul = document.getElementById('orders');
    const li = document.createElement('li');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const p = document.createElement('p');

    div1.className = "item-container";
    div2.className = "name-price";
    div3.className = "button";
    span1.className = "name";
    span2.className = "price";

    // Make sure button has a unique ID for each item
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    button1.className = "minus";
    button1.id = "minus-button";
    button1.onclick = removeQuantity;
    button1.appendChild(document.createTextNode("-"));
    button2.className = "add";
    button2.id = "add-button";
    button2.onclick = addQuantity;
    button2.appendChild(document.createTextNode("+"));
    

    p.className = "quantity_class";
    p.id = "quantity";


    span1.appendChild(document.createTextNode(name));
    span2.appendChild(document.createTextNode("Php " + price));
    div2.appendChild(span1);
    div2.appendChild(span2);
    div3.appendChild(button1);
    p.appendChild(document.createTextNode("0"));
    div3.appendChild(p);
    div3.appendChild(button2);
    div1.appendChild(div2);
    div1.appendChild(div3);
    li.appendChild(div1);
    ul.appendChild(li);

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

function addQuantity() {
    const quantity = document.getElementById('quantity');
    const value = parseInt(quantity.innerHTML);
    quantity.innerHTML = value + 1;
}

function removeQuantity() {
    const quantity = document.getElementById('quantity');
    const value = parseInt(quantity.innerHTML);
    if (value > 0) {
        quantity.innerHTML = value - 1;
    }
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

    drinks1.addEventListener('click', () => {
        addItemToLI("Iced Tea", 55);

        // Disable the button 
        drinks1.disabled = true;
        drinks2.disabled = true;
        drinks3.disabled = true;
    });

    drinks2.addEventListener('click', () => {
        addItemToLI("Root Beer", 60);

        drinks1.disabled = true;
        drinks2.disabled = true;
        drinks3.disabled = true;
    });

    drinks3.addEventListener('click', () => {
        addItemToLI("Water", 20);

        drinks1.disabled = true;
        drinks2.disabled = true;
        drinks3.disabled = true;
    });

    meals1.addEventListener('click', () => {
        addItemToLI("Steak", 900);

        meals1.disabled = true;
        meals2.disabled = true;
        meals3.disabled = true;
    });

    meals2.addEventListener('click', () => {
        addItemToLI("Salmon", 850);

        meals1.disabled = true;
        meals2.disabled = true;
        meals3.disabled = true;
    });

    meals3.addEventListener('click', () => {
        addItemToLI("Chicken", 300);

        meals1.disabled = true;
        meals2.disabled = true;
        meals3.disabled = true;
    });

    sides1.addEventListener('click', () => {
        addItemToLI("Baked Potato", 80);

        sides1.disabled = true;
        sides2.disabled = true;
        sides3.disabled = true;
    });

    sides2.addEventListener('click', () => {
        addItemToLI("Mashed Potato", 75);

        sides1.disabled = true;
        sides2.disabled = true;
        sides3.disabled = true;
    });

    sides3.addEventListener('click', () => {
        addItemToLI("Steamed Vegetables", 50);

        sides1.disabled = true;
        sides2.disabled = true;
        sides3.disabled = true;
    });
});






