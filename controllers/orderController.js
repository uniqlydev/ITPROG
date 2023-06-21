const Order = require("../models/order");

const order = new Order();

function addQuantity(htmlelement) {
    var quantity = document.getElementById(htmlelement).innerHTML;
    quantity++;
    document.getElementById(htmlelement).innerHTML = quantity;
}

function removeQuantity(htmlelement) {
    var quantity = document.getElementById(htmlelement).innerHTML;
    if (quantity > 0) {
        quantity--;
        document.getElementById(htmlelement).innerHTML = quantity;
    } else {
        alert("Quantity cannot be less than 0");
    }
}

function addMain(main) {
    order.setMain(main);
    alert("Main: " + order.getMain());
}

function addSide(side, order) {
    order.setSide(side);
    alert("Side: " + order.getSide());
}

function addDrink(drink, order) {
    order.setDrink(drink);
    alert("Drink: " + order.getDrink());
}

function clearOrder() {
    order.setMain("");
    order.setSide("");
    order.setDrink("");
    order.setMainQuantity(0);
    order.setSideQuantity(0);
    order.setDrinkQuantity(0);

    alert("Order cleared");
}

function TESTKUNGGUMANAANGBUTTON() {
    alert("PUTANGINA GUMAGANA")
}

module.exports = {
    addQuantity,
    removeQuantity,
    addMain,
    addSide,
    addDrink,
    clearOrder,
    TESTKUNGGUMANAANGBUTTON
}