class customer {
    constructor(uname,main, sides, drinks, total, date,mquan, squan, dquan, priceOfMain, priceOfSide, priceOfDrink) {
        this.uname = uname;
        this.main = main;
        this.sides = sides;
        this.drinks = drinks;
        this.total = total;
        this.date = date;
        this.mquan = mquan;
        this.squan = squan;
        this.dquan = dquan;
        this.priceOfMain = priceOfMain;
        this.priceOfSide = priceOfSide;
        this.priceOfDrink = priceOfDrink;
    }    
}

module.exports = customer;