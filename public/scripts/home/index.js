// Variables for subtotal and total
var totl = 0;
var subtotal = 0;

var mainSelected, sideSelected, drinkSelected;




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

    var mainm = document.getElementById('mainm');
    var drinks = document.getElementById('drinks');
    var side = document.getElementById('sides');

    const total = document.getElementById('total');

    const mquan = document.getElementById('quantitymain');
    const squan = document.getElementById('quantityside');
    const dquan = document.getElementById('quantitydrink');



    mquan.addEventListener('input', () => {
        var previousValue = parseInt(total.value);
        var currentValue = parseInt(mquan.value);
        subtotal = subtotal - previousValue + (mainSelected * currentValue);
        total.value = subtotal.toString();

        // If quantity is 0 then remove mainm
        if (currentValue == 0) {
            mainm.value = "";
            meals1.disabled = false;
            meals2.disabled = false;
            meals3.disabled = false;
            mainSelected = 0;
        }
    });

    squan.addEventListener('input', () => {
        var previousValue = parseInt(total.value);
        var currentValue = parseInt(squan.value);
        subtotal = subtotal - previousValue + (sideSelected * currentValue);
        total.value = subtotal.toString();

        // If quantity is 0 then remove mainm
        if (currentValue == 0) {
            side.value = "";
            sides1.disabled = false;
            sides2.disabled = false;
            sides3.disabled = false;
            sideSelected = 0;
        }
    });

    dquan.addEventListener('input', () => {
        var previousValue = parseInt(total.value);
        var currentValue = parseInt(dquan.value);
        subtotal = subtotal - previousValue + (drinkSelected * currentValue);
        total.value = subtotal.toString();

        // If quantity is 0 then remove mainm
        if (currentValue == 0) {
            drinks.value = "";
            drinks1.disabled = false;
            drinks2.disabled = false;
            drinks3.disabled = false;
            drinkSelected = 0;

            dquan.setAttribute('disabled', 'true');
            dquan.setAttribute('readonly', 'true');
        }
    });

    meals1.addEventListener('click', () => {
        mquan.value = "1";
        mainm.value = "Ribeye Steak";
    
        subtotal += 900;
        total.value = subtotal.toString();

        meals1.disabled = true;
        meals2.disabled = true;
        meals3.disabled = true;

        mquan.removeAttribute('disabled');
        mquan.removeAttribute('readonly');

        mainSelected = 900;
    });

    meals2.addEventListener('click', () => {
        mainm.value = "Salmon Steak";

        mquan.value = 1;

        subtotal += 850;
        total.value = subtotal.toString();

        meals1.disabled = true;
        meals2.disabled = true;
        meals3.disabled = true;

        mquan.removeAttribute('disabled');
        mquan.removeAttribute('readonly');

        mainSelected = 850;


    });

    meals3.addEventListener('click', () => {
        mainm.value = "Chicken";

        mquan.value = 1;

        subtotal += 300;
        total.value = subtotal.toString();

        meals1.disabled = true;
        meals2.disabled = true;
        meals3.disabled = true;

        mquan.removeAttribute('disabled');
        mquan.removeAttribute('readonly');

        mainSelected = 300;
    });

    drinks1.addEventListener('click', () => {
        drinks.value = "Iced Tea";

        dquan.value = 1;

        subtotal += 55;
        total.value = subtotal.toString();

        drinks1.disabled = true;
        drinks2.disabled = true;
        drinks3.disabled = true;

        dquan.removeAttribute('disabled');
        dquan.removeAttribute('readonly');

        drinkSelected = 55;
    });

    drinks2.addEventListener('click', () => {
        drinks.value = "Root Beer";

        dquan.value = 1;

        subtotal += 60;
        total.value = subtotal.toString();

        drinks1.disabled = true;
        drinks2.disabled = true;
        drinks3.disabled = true;

        dquan.removeAttribute('disabled');
        dquan.removeAttribute('readonly');

        drinkSelected = 60;
    });

    drinks3.addEventListener('click', () => {
        drinks.value = "Water";

        dquan.value = 1;

        subtotal += 20;
        total.value = subtotal.toString();

        drinks1.disabled = true;
        drinks2.disabled = true;
        drinks3.disabled = true;

        dquan.removeAttribute('disabled');
        dquan.removeAttribute('readonly');


        drinkSelected = 20;
    });

    sides1.addEventListener('click', () => {
        side.value = "Baked Potato";

        squan.value = 1;

        subtotal += 80;
        total.value = subtotal.toString();

        sides1.disabled = true;
        sides2.disabled = true;
        sides3.disabled = true;

        squan.removeAttribute('disabled');
        squan.removeAttribute('readonly');

        sideSelected = 80;
    });

    sides2.addEventListener('click', () => {
        side.value = "Mashed Potato";

        squan.value = 1;

        subtotal += 75;
        total.value = subtotal.toString();

        sides1.disabled = true;
        sides2.disabled = true;
        sides3.disabled = true;

        squan.removeAttribute('disabled');
        squan.removeAttribute('readonly');

        sideSelected = 75;
    });

    sides3.addEventListener('click', () => {
        side.value = "Steamed Vegetables";

        squan.value = 1;

        subtotal += 50;
        total.value = subtotal.toString();

        sides1.disabled = true;
        sides2.disabled = true;
        sides3.disabled = true;

        squan.removeAttribute('disabled');
        squan.removeAttribute('readonly');
        
        sideSelected = 50;
    });

    
});