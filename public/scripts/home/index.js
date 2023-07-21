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

function clearOrder() {

    subtotal = 0;
    totl = 0;
}


document.addEventListener('DOMContentLoaded', () => {

    // On load alert instructions
    alert("Please select one (1) meal, one (1) drink, and one (1) side dish. You can add more by clicking the + button. However, having multiple different kinds of meal is not allowed.");

    // Get elements
                // Add an event listener to the parent <ul> element
document.getElementById("foodlist").addEventListener("click", function(event) {
    // Check if the click event occurred on an <li> element
    if (event.target && event.target.tagName === "LI") {
        // Handle the click event here
        // Access the clicked <li> element's data using event.target.dataset or other properties
        console.log("Clicked on:", event.target.querySelector('.label').innerText); // Example: Accessing the food name
    }
});



    
});