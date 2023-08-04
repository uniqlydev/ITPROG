class order {
    constructor() {
        this.main = "";
        this.side = "";
        this.drink = "";
        this.mainQuantity = 0;
        this.sideQuantity = 0;
        this.drinkQuantity = 0;
        this.total = 0;
    }

    // Generate getters and setters
    getMain() {
        return this.main;
    }

    setMain(main) {
        this.main = main;
    }

    getSide() {
        return this.side;
    }

    setSide(side) {
        this.side = side;
    }

    getDrink() {
        return this.drink;
    }

    setDrink(drink) {
        this.drink = drink;
    }

    getMainQuantity() {
        return this.mainQuantity;
    }

    setMainQuantity(mainQuantity) {
        this.mainQuantity = mainQuantity;
    }

    getSideQuantity() {
        return this.sideQuantity;
    }

    setSideQuantity(sideQuantity) {
        this.sideQuantity = sideQuantity;
    }

    getDrinkQuantity() {
        return this.drinkQuantity;
    }

    setDrinkQuantity(drinkQuantity) {
        this.drinkQuantity = drinkQuantity;
    }

    getTotal() {
        return this.total;
    }

    setTotal(total) {
        this.total = total;
    }

    // Calculate total
    calculateTotal() {
        this.total = (this.mainQuantity * 10) + (this.sideQuantity * 5) + (this.drinkQuantity * 2);
    }



    

    
}