
// Variables for subtotal and total
var totl = 0;
var subtotal = 0;





function add(price) {
    total += price;
    document.getElementById('total').value = total;
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


    meals1.addEventListener('click', () => {
        mainm.value = meals1.innerHTML;
    
        subtotal += 900;
        total.value = subtotal.toString();

        meals1.disabled = true;
        meals2.disabled = true;
        meals3.disabled = true;
    });

    meals2.addEventListener('click', () => {
        mainm.value = meals2.innerHTML;

        subtotal += 800;
        total.value = subtotal.toString();

        meals1.disabled = true;
        meals2.disabled = true;
        meals3.disabled = true;
    });

    meals3.addEventListener('click', () => {
        mainm.value = meals3.innerHTML;

        subtotal += 350;
        total.value = subtotal.toString();

        meals1.disabled = true;
        meals2.disabled = true;
        meals3.disabled = true;
    });

    drinks1.addEventListener('click', () => {
        drinks.value = drinks1.innerHTML;

        subtotal += 55;
        total.value = subtotal.toString();

        drinks1.disabled = true;
        drinks2.disabled = true;
        drinks3.disabled = true;
    });

    drinks2.addEventListener('click', () => {
        drinks.value = drinks2.innerHTML;

        subtotal += 60;
        total.value = subtotal.toString();

        drinks1.disabled = true;
        drinks2.disabled = true;
        drinks3.disabled = true;
    });

    drinks3.addEventListener('click', () => {
        drinks.value = drinks3.innerHTML;

        subtotal += 20;
        total.value = subtotal.toString();

        drinks1.disabled = true;
        drinks2.disabled = true;
        drinks3.disabled = true;
    });

    sides1.addEventListener('click', () => {
        side.value = sides1.innerHTML;

        subtotal += 80;
        total.value = subtotal.toString();

        sides1.disabled = true;
        sides2.disabled = true;
        sides3.disabled = true;
    });

    sides2.addEventListener('click', () => {
        side.value = sides2.innerHTML;

        subtotal += 75;
        total.value = subtotal.toString();

        sides1.disabled = true;
        sides2.disabled = true;
        sides3.disabled = true;
    });

    sides3.addEventListener('click', () => {
        side.value = sides3.innerHTML;

        subtotal += 50;
        total.value = subtotal.toString();

        sides1.disabled = true;
        sides2.disabled = true;
        sides3.disabled = true;
    });

    
});