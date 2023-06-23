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


    meals1.addEventListener('click', () => {
        mainm.value = meals1.innerHTML;

        console.log(mainm.value);
    });

    meals2.addEventListener('click', () => {
        mainm.value = meals2.innerHTML;

        console.log(mainm.value);
    });

    meals3.addEventListener('click', () => {
        mainm.value = meals3.innerHTML;

        console.log(mainm.value);
    });

    drinks1.addEventListener('click', () => {
        drinks.value = drinks1.innerHTML;

        console.log(drinks.value);
    });

    drinks2.addEventListener('click', () => {
        drinks.value = drinks2.innerHTML;

        console.log(drinks.value);
    });

    drinks3.addEventListener('click', () => {
        drinks.value = drinks3.innerHTML;

        console.log(drinks.value);
    });

    sides1.addEventListener('click', () => {
        side.value = sides1.innerHTML;

        console.log(side.value);
    });

    sides2.addEventListener('click', () => {
        side.value = sides2.innerHTML;

        console.log(side.value);
    });

    sides3.addEventListener('click', () => {
        side.value = sides3.innerHTML;

        console.log(side.value);
    });

    
});