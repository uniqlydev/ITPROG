function addItemToLI(type, name, price) {
    const ul = document.getElementById('orders');
    const li = document.createElement('li');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const drinkP = document.createElement('p');
    const drinkButton1 = document.createElement('button');
    const drinkButton2 = document.createElement('button');
    const mainP = document.createElement('p');
    const mainButton1 = document.createElement('button');
    const mainButton2 = document.createElement('button');
    const sideP = document.createElement('p');
    const sideButton1 = document.createElement('button');
    const sideButton2 = document.createElement('button');

    div1.className = "item-container";
    div2.className = "name-price";
    div3.className = "button";
    span1.className = "name";
    span2.className = "price";

    if (type == "Main") {
        mainButton1.className = "minus";
        mainButton1.id = "minus-button";
        mainButton1.addEventListener("click", removeQuantityMain);
        mainButton1.appendChild(document.createTextNode("-"));
        mainButton2.className = "add";
        mainButton2.id = "add-button";
        mainButton2.addEventListener("click", addQuantityMain);
        mainButton2.appendChild(document.createTextNode("+"));

        mainP.className = "quantity_class";
        mainP.id = "quantity_main";

        span1.appendChild(document.createTextNode(name));
        span2.appendChild(document.createTextNode("Php " + price));
        div2.appendChild(span1);
        div2.appendChild(span2);
        div3.appendChild(mainButton1);
        mainP.appendChild(document.createTextNode("1"));
        div3.appendChild(mainP);
        div3.appendChild(mainButton2);
        div1.appendChild(div2);
        div1.appendChild(div3);
        li.appendChild(div1);
        ul.appendChild(li);
    }
    if (type == "Drink") {
        drinkButton1.className = "minus";
        drinkButton1.id = "minus-button";
        drinkButton1.addEventListener("click", removeQuantityDrink);
        drinkButton1.appendChild(document.createTextNode("-"));
        drinkButton2.className = "add";
        drinkButton2.id = "add-button";
        drinkButton2.addEventListener("click", addQuantityDrink);
        drinkButton2.appendChild(document.createTextNode("+"));

        drinkP.className = "quantity_class";
        drinkP.id = "quantity_drink";

        span1.appendChild(document.createTextNode(name));
        span2.appendChild(document.createTextNode("Php " + price));
        div2.appendChild(span1);
        div2.appendChild(span2);
        div3.appendChild(drinkButton1);
        drinkP.appendChild(document.createTextNode("1"));
        div3.appendChild(drinkP);
        div3.appendChild(drinkButton2);
        div1.appendChild(div2);
        div1.appendChild(div3);
        li.appendChild(div1);
        ul.appendChild(li);
    }
    if (type == "Sides"){
        sideButton1.className = "minus";
        sideButton1.id = "minus-button";
        sideButton1.addEventListener("click", removeQuantitySide);
        sideButton1.appendChild(document.createTextNode("-"));
        sideButton2.className = "add";
        sideButton2.id = "add-button";
        sideButton2.addEventListener("click", addQuantitySide);
        sideButton2.appendChild(document.createTextNode("+"));

        sideP.className = "quantity_class";
        sideP.id = "quantity_side";

        span1.appendChild(document.createTextNode(name));
        span2.appendChild(document.createTextNode("Php " + price));
        div2.appendChild(span1);
        div2.appendChild(span2);
        div3.appendChild(sideButton1);
        sideP.appendChild(document.createTextNode("1"));
        div3.appendChild(sideP);
        div3.appendChild(sideButton2);
        div1.appendChild(div2);
        div1.appendChild(div3);
        li.appendChild(div1);
        ul.appendChild(li);
    }

    // Update subtotal
    const subtotal = document.getElementById('subtotal');
    const subtotalValue = parseInt(subtotal.innerHTML);
    subtotal.innerHTML = subtotalValue + price;

    // Update total
    const total = document.getElementById('total');
    const totalValue = parseInt(total.innerHTML);
    total.innerHTML = totalValue + price;

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

function addQuantityMain() {
    const quantity = document.getElementById('quantity_main');
    const quantityValue = parseInt(quantity.innerHTML);
    quantity.innerHTML = quantityValue + 1;


    // TODO: Fix update subtotal
    // Update subtotal
    const subtotal = document.getElementById('subtotal');
    const subtotalValue = parseInt(subtotal.innerHTML);
    subtotal.innerHTML = subtotalValue + price;

    // TODO: Fix update total
    // Update total
    const total = document.getElementById('total');
    const totalValue = parseInt(total.innerHTML);
    total.innerHTML = totalValue + price;
}

function removeQuantityMain() {
    const quantity = document.getElementById('quantity_main');
    const quantityValue = parseInt(quantity.innerHTML);
    if (quantityValue > 1) {
        quantity.innerHTML = quantityValue - 1;
    }
}

function addQuantitySide() {
    const quantity = document.getElementById('quantity_side');
    const quantityValue = parseInt(quantity.innerHTML);
    quantity.innerHTML = quantityValue + 1;
}

function removeQuantitySide() {
    const quantity = document.getElementById('quantity_side');
    const quantityValue = parseInt(quantity.innerHTML);
    if (quantityValue > 1) {
        quantity.innerHTML = quantityValue - 1;
    }
}

function addQuantityDrink() {
    const quantity = document.getElementById('quantity_drink');
    const quantityValue = parseInt(quantity.innerHTML);
    quantity.innerHTML = quantityValue + 1;
}

function removeQuantityDrink() {
    const quantity = document.getElementById('quantity_drink');
    const quantityValue = parseInt(quantity.innerHTML);
    if (quantityValue > 1) {
        quantity.innerHTML = quantityValue - 1;
    }
}

function clearOrder() {
    const ul = document.getElementById('orders');
    ul.innerHTML = "";

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

    drinks1.disabled = false;
    drinks2.disabled = false;
    drinks3.disabled = false;

    meals1.disabled = false;
    meals2.disabled = false;
    meals3.disabled = false;

    sides1.disabled = false;
    sides2.disabled = false;
    sides3.disabled = false;

    // Update subtotal
    const subtotal = document.getElementById('subtotal');
    subtotal.innerHTML = 0;

    // Update total
    const total = document.getElementById('total');
    total.innerHTML = 0;
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
        addItemToLI("Drink", "Iced Tea", 55);

        // Disable the button 
        drinks1.disabled = true;
        drinks2.disabled = true;
        drinks3.disabled = true;
    });

    drinks2.addEventListener('click', () => {
        addItemToLI("Drink", "Root Beer", 60);

        drinks1.disabled = true;
        drinks2.disabled = true;
        drinks3.disabled = true;
    });

    drinks3.addEventListener('click', () => {
        addItemToLI("Drink", "Water", 20);

        drinks1.disabled = true;
        drinks2.disabled = true;
        drinks3.disabled = true;
    });

    meals1.addEventListener('click', () => {
        addItemToLI("Main", "Steak", 900);

        meals1.disabled = true;
        meals2.disabled = true;
        meals3.disabled = true;
    });

    meals2.addEventListener('click', () => {
        addItemToLI("Main", "Salmon", 850);

        meals1.disabled = true;
        meals2.disabled = true;
        meals3.disabled = true;
    });

    meals3.addEventListener('click', () => {
        addItemToLI("Main", "Chicken", 300);

        meals1.disabled = true;
        meals2.disabled = true;
        meals3.disabled = true;
    });

    sides1.addEventListener('click', () => {
        addItemToLI("Sides", "Baked Potato", 80);

        sides1.disabled = true;
        sides2.disabled = true;
        sides3.disabled = true;
    });

    sides2.addEventListener('click', () => {
        addItemToLI("Sides", "Mashed Potato", 75);

        sides1.disabled = true;
        sides2.disabled = true;
        sides3.disabled = true;
    });

    sides3.addEventListener('click', () => {
        addItemToLI("Sides", "Steamed Vegetables", 50);

        sides1.disabled = true;
        sides2.disabled = true;
        sides3.disabled = true;
    });
});






