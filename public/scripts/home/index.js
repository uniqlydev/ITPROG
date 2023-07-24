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

    // <div class="total-container">
    // <label for="item">Total:</label>
    // <input type="text" id="total" class="ttl" name="total" required readonly value="0" >
    // </div>
    const total = document.getElementById('total');

    // Function to add the selected item to the cart
    function addToCart(foodName, price) {
        document.getElementById('mainm').value = foodName;
        document.getElementById('mainm').hidden = false;
        document.getElementById('msubtract').hidden = false;
        document.getElementById('quantitymain').hidden = false;
        document.getElementById('madd').hidden = false;
        document.getElementById('quantitymain').value = 1;
        document.getElementById('quantitymain').disabled = false;
        document.getElementById('price-main').textContent = price.toFixed(2);

        // Update text of total
        subtotal += price;
        total.value = subtotal.toFixed(2);
    }


    function addQuantity() {
        let quantity = document.getElementById('quantitymain');
        quantity.value = parseInt(quantity.value) + 1;
    }

    function subtractQuantity() {
        let quantity = document.getElementById('quantitymain');

        if (parseInt(quantity.value) - 1 < 0) {
            return;
        }
        quantity.value = parseInt(quantity.value) - 1;
    }

    // Attach event listeners to each li element
    const lis = document.querySelectorAll('li[id^="m"]');
    lis.forEach((li, index) => {
        const button = li.querySelector('.button-menu');
        const price = parseFloat(li.querySelector('p[id^="price-"]').textContent);
        const foodName = li.querySelector('.label').textContent;

        button.addEventListener('click', () => {
            addToCart(foodName, price);
        });
    });

    // Add event listener to add button
    document.getElementById('madd').addEventListener('click', () => {
        addQuantity();
    });

    // Add event listener to subtract button
    document.getElementById('msubtract').addEventListener('click', () => {
        subtractQuantity();
    });
});


