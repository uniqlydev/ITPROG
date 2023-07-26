// Variables for subtotal and total
var totl = 0;
var subtotal = 0;



function add(price) {
    total += price;
    document.getElementById('total').value = total;
    total.value = subtotal.toString();
}

function checkFields(event) {
    let mainField = document.getElementById('mainm').value;
    let sideField = document.getElementById('sides').value;
    let drinkField = document.getElementById('drinks').value;

    if (mainField == "" && sideField == "" && drinkField == "") {
        alert("Please fill out at least 1 field");
        event.preventDefault();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // On load alert instructions
    alert("Please select one (1) meal, one (1) drink, and one (1) side dish. You can add more by clicking the + button. However, having multiple different kinds of meal is not allowed.");

    // Variables for subtotal, total, and other variables (if any)
    let totals = 0;
    let discount = 0;
    let subtotal = 0;

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
        document.getElementById('drinkphp').hidden = false;
        document.getElementById('drinkphp').value = price.toFixed(2);

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

    // Add event listener to add button
    document.getElementById('madd').addEventListener('click', () => {
        addQuantity(document.getElementById('quantitymain'), parseFloat(document.getElementById('mainphp').value));
    });

    // Add event listener to subtract button
    document.getElementById('msubtract').addEventListener('click', () => {
        subtractQuantity(document.getElementById('quantitymain'), parseFloat(document.getElementById('mainphp').value));
    });
});


