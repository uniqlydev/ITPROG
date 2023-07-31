document.addEventListener('DOMContentLoaded', function () {
    function comboChecker(main, side, drink, mquan, squan, dquan) {
        comboTotal = 0;
        totalDiscount = 0;

        if (main == "Chicken" && side == "Mashed Potato" && drink == "Iced Tea") {
            while (mquan > 0 && squan > 0 && dquan > 0) {
                // Add price for combo meals ONLY
                comboTotal = chicken + mashed + iced;
            
                // Discount for the combo ONLY
                totalDiscount += (comboTotal * 0.10);
                
                // Decrement the quantity of each item to find how many combos in order
                mquan--;
                squan--;
                dquan--;
            }
            alert("Chicken Mash Tea Combo applied! 10% off your order!");
            return totalDiscount;
        } else if (main == "Ribeye Steak" && side == "Steamed Vegetables" && drink == "Root Beer") {
            while (mquan > 0 && squan > 0 && dquan > 0) {
                // Add price for combo meals ONLY
                comboTotal = steak + steamed + root;

                // Discount for the combo ONLY
                totalDiscount += (comboTotal * 0.15);

                // Decrement the quantity of each item to find how many combos in order
                mquan--;
                squan--;
                dquan--;
            }
            alert("Steak Veg Beer Combo applied! 15% off your order!");
            return totalDiscount;
        }

        return totalDiscount;
    }

    // Ask for username
    var uname = prompt("Please enter your username: ");

    const main = document.getElementById('meal').innerHTML;
    const side = document.getElementById('sides').innerHTML;
    const drink = document.getElementById('drink').innerHTML;
    const mquan = document.getElementById('mquan').innerHTML;
    const squan = document.getElementById('squan').innerHTML;
    const dquan = document.getElementById('dquan').innerHTML;

    var disc = comboChecker(main, side, drink, mquan, squan, dquan);

    
    document.getElementById('username').value = uname;
    document.getElementById('discount').value = disc;

});