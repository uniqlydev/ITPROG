class Order {
    constructor() {
        this.main = "";
        this.side = "";
        this.drink = "";
        this.mainQuantity = 0;
        this.sideQuantity = 0;
        this.drinkQuantity = 0;
        this.total = 0;
    }

    setMain(main) {
        this.main = main;
    }

    setSide(side) {
        this.side = side;
    }

    setDrink(drink) {
        this.drink = drink;
    }

    setMainQuantity(mainQuantity) {
        this.mainQuantity = mainQuantity;
    }

    setSideQuantity(sideQuantity) {
        this.sideQuantity = sideQuantity;
    }

    setDrinkQuantity(drinkQuantity) {
        this.drinkQuantity = drinkQuantity;
    }

    setTotal(total) {
        this.total = total;
    }

    getMain() {
        return this.main;
    }

    getSide() {
        return this.side;
    }

    getDrink() {
        return this.drink;
    }

    getMainQuantity() {
        return this.mainQuantity;
    }

    getSideQuantity() {
        return this.sideQuantity;
    }

    getDrinkQuantity() {
        return this.drinkQuantity;
    }

    getTotal() {
        return this.total;
    }
}

class Menu {
    constructor() {
        this.main1 = "Steak";
        this.main2 = "Salmon";
        this.main3 = "Chicken";
        this.side1 = "Baked Potato";
        this.side2 = "Mashed Potato";
        this.side3 = "Steamed Vegetables";
        this.drink1 = "Ice Tea";
        this.drink2 = "Root Beer";
        this.drink3 = "Water";

        this.main1Price = 900;
        this.main2Price = 850;
        this.main3Price = 300;
        this.side1Price = 80;
        this.side2Price = 75;
        this.side3Price = 50;
        this.drink1Price = 55;
        this.drink2Price = 60;
        this.drink3Price = 20;
    }

    getMain1() {
        return this.main1;
    }

    getMain2() {
        return this.main2;
    }

    getMain3() {
        return this.main3;
    }

    getSide1() {
        return this.side1;
    }

    getSide2() {
        return this.side2;
    }

    getSide3() {
        return this.side3;
    }

    getDrink1() {
        return this.drink1;
    }

    getDrink2() {
        return this.drink2;
    }

    getDrink3() {
        return this.drink3;
    }

    getMain1Price() {
        return this.main1Price;
    }

    getMain2Price() {
        return this.main2Price;
    }

    getMain3Price() {
        return this.main3Price;
    }

    getSide1Price() {
        return this.side1Price;
    }

    getSide2Price() {
        return this.side2Price;
    }

    getSide3Price() {
        return this.side3Price;
    }

    getDrink1Price() {
        return this.drink1Price;
    }

    getDrink2Price() {
        return this.drink2Price;
    }

    getDrink3Price() {
        return this.drink3Price;
    }
}

function addQuantity() {
    var quantity = document.getElementById("quantity").innerHTML;
    quantity++;
    document.getElementById("quantity").innerHTML = quantity;
}

function removeQuantity() {
    var quantity = document.getElementById("quantity").innerHTML;
    if (quantity > 0) {
        quantity--;
        document.getElementById("quantity").innerHTML = quantity;
    } else {
        alert("Quantity cannot be less than 0");
    }
}

const order = new Order();

function addMain(main) {
    order.setMain(main);

    alert("Main: " + order.getMain());
}

function addSide(side) {
    order.setSide(side);

    alert("Side: " + order.getSide());
}

function addDrink(drink) {
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