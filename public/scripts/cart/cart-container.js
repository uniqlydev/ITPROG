// Variables for subtotal and total
var totl = 0;
var subtotal = 0;

var mainSelected, sideSelected, drinkSelected;

var mcounter = 0;



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
    document.getElementById('mainm').value = "";
    document.getElementById('drinks').value = "";
    document.getElementById('sides').value = "";

    document.getElementById('quantitymain').value = 0;
    document.getElementById('quantitydrink').value = 0;
    document.getElementById('quantityside').value = 0;

    document.getElementById('total').value = 0;

    // Enable buttons
    document.getElementById('meals1').disabled = false;
    document.getElementById('meals2').disabled = false;
    document.getElementById('meals3').disabled = false;

    document.getElementById('drinks1').disabled = false;
    document.getElementById('drinks2').disabled = false;
    document.getElementById('drinks3').disabled = false;

    document.getElementById('sides1').disabled = false;
    document.getElementById('sides2').disabled = false;
    document.getElementById('sides3').disabled = false;

    // Reset variables
    subtotal = 0;
    totl = 0;
}

document.addEventListener('DOMContentLoaded', () => {



});