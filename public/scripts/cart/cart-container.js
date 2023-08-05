// Variables for subtotal and total
var totl = 0;
var subtotal = 0;

var mainSelected, sideSelected, drinkSelected;

var mcounter = 0;


function checkFields(event) {
    let mainField = document.getElementById('mainm').value;
    let sideField = document.getElementById('sides').value;
    let drinkField = document.getElementById('drinks').value;

    if (mainField == "none" && sideField == "none" && drinkField == "none") {
        alert("Please fill out at least 1 field");
        event.preventDefault();
    }
}

function clearOrder() {
    // main-meal
    document.getElementById('mainm').value = "none";
    document.getElementById('mainm').hidden = true;

    document.getElementById('mainphp').value="0"
    document.getElementById('mainphp').hidden = true;

    document.getElementById('msubtract').hidden = true;
    document.getElementById('quantitymain').hidden = true;
    document.getElementById('quantitymain').value="0";
    document.getElementById('madd').hidden = true;

    // side-dish
    document.getElementById('sides').value = "none";
    document.getElementById('sides').hidden = true;

    document.getElementById('sidesphp').value="0"
    document.getElementById('sidesphp').hidden = true;

    document.getElementById('ssubtract').hidden = true;
    document.getElementById('quantityside').hidden = true;
    document.getElementById('quantityside').value="0";

    document.getElementById('sadd').hidden = true;

    // drinks
    document.getElementById('drinks').value = "none";
    document.getElementById('drinks').hidden = true;

    document.getElementById('drinksphp').value="0"
    document.getElementById('drinksphp').hidden = true;

    document.getElementById('dsubtract').hidden = true;
    document.getElementById('quantitydrink').hidden = true;
    document.getElementById('quantitydrink').value="0";

    document.getElementById('dadd').hidden = true;

    document.getElementById('total').value = "0";

    // Reset variables
    subtotal = 0;
    totl = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    // On load alert instructions
    alert("Please select one (1) meal, one (1) drink, and one (1) side dish. You can add more by clicking the + button. However, having multiple different kinds of meal is not allowed.");


    const totalField = document.getElementById('total');


    const total = document.getElementById('total');

    // Function to add the selected item to the cart
    function addToCartMain(foodName, price) {
        document.getElementById('mainm').value = foodName;
        document.getElementById('mainm').hidden = false;
        document.getElementById('msubtract').hidden = false;
        document.getElementById('quantitymain').hidden = false;
        document.getElementById('madd').hidden = false;
        document.getElementById('quantitymain').value = 1;
        document.getElementById('quantitymain').disabled = false;
        document.getElementById('mainphp').hidden = false;
        document.getElementById('mainphp').value = price.toFixed(2);

        subtotal += price;
        totalField.value = subtotal.toFixed(2);
    }

    function addToCartDrinks(foodName, price) {
        document.getElementById('drinks').value = foodName;
        document.getElementById('drinks').hidden = false;
        document.getElementById('dsubtract').hidden = false;
        document.getElementById('quantitydrink').hidden = false;
        document.getElementById('dadd').hidden = false;
        document.getElementById('quantitydrink').value = 1;
        document.getElementById('quantitydrink').disabled = false;
        document.getElementById('drinksphp').hidden = false;
        document.getElementById('drinksphp').value = price.toFixed(2);

        subtotal += price;
        totalField.value = subtotal.toFixed(2);
    }

    function addToCartSides(foodName, price) {
        document.getElementById('sides').value = foodName;
        document.getElementById('sides').hidden = false;
        document.getElementById('ssubtract').hidden = false;
        document.getElementById('quantityside').hidden = false;
        document.getElementById('sadd').hidden = false;
        document.getElementById('quantityside').value = 1;
        document.getElementById('quantityside').disabled = false;
        document.getElementById('sidesphp').hidden = false;
        document.getElementById('sidesphp').value = price.toFixed(2);

        subtotal += price;
        totalField.value = subtotal.toFixed(2);
    }

    
    function addQuantity(qtty, price) {
        qtty.value = parseInt(qtty.value) + 1;
        subtotal += price;
        totalField.value = subtotal.toFixed(2);
    }

    function subtractQuantity(qtty, price) {
        if (qtty.value > 0) {
            qtty.value = parseInt(qtty.value) - 1;
            subtotal -= price;
            totalField.value = subtotal.toFixed(2);
        }
    }

    // Attach event listeners to each li element
    const lis = document.querySelectorAll('li[id^="m"]');
    lis.forEach((li, index) => {
        const button = li.querySelector('.button-menu');
        const price = parseFloat(li.querySelector('p[id^="price-"]').textContent.trim().replace('PHP', ''));
        const foodName = li.querySelector('.label').textContent;

        button.addEventListener('click', () => {
            addToCartMain(foodName, price);
        });
    });

    const drinkLis = document.querySelectorAll('li[id^="d"]');
    drinkLis.forEach((li, index) => {
        const buttonD = li.querySelector('.button-menu');
        const priceD = parseFloat(li.querySelector('p[id^="price-"]').textContent.trim().replace('PHP', ''));
        const foodNameD = li.querySelector('.label').textContent;

        buttonD.addEventListener('click', () => {
            addToCartDrinks(foodNameD, priceD);
        });
    });

    const sidesLis = document.querySelectorAll('li[id^="s"]');
    sidesLis.forEach((li, index) => {
        const buttonS = li.querySelector('.button-menu');
        const priceS = parseFloat(li.querySelector('p[id^="price-"]').textContent.trim().replace('PHP', ''));
        const foodNameS = li.querySelector('.label').textContent;

        buttonS.addEventListener('click', () => {
            addToCartSides(foodNameS, priceS);
        });
    });

    // Add event listener to add button
    document.getElementById('madd').addEventListener('click', () => {
        addQuantity(document.getElementById('quantitymain'), parseFloat(document.getElementById('mainphp').value));
    });

    document.getElementById('sadd').addEventListener('click', () => {
        addQuantity(document.getElementById('quantityside'), parseFloat(document.getElementById('sidesphp').value));
    });

    document.getElementById('dadd').addEventListener('click', () => {
        addQuantity(document.getElementById('quantitydrink'), parseFloat(document.getElementById('drinksphp').value));
    });

    // Add event listener to subtract button
    document.getElementById('msubtract').addEventListener('click', () => {
        subtractQuantity(document.getElementById('quantitymain'), parseFloat(document.getElementById('mainphp').value));
    });

    document.getElementById('ssubtract').addEventListener('click', () => {
        subtractQuantity(document.getElementById('quantityside'), parseFloat(document.getElementById('sidesphp').value));
    });

    document.getElementById('dsubtract').addEventListener('click', () => {
        subtractQuantity(document.getElementById('quantitydrink'), parseFloat(document.getElementById('drinksphp').value));
    });


    // Cart

    document.getElementById('submit').addEventListener('click', () => {
        checkFields(event);
    });
});