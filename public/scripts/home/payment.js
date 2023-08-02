document.addEventListener('DOMContentLoaded', function () {
    function comboChecker(main, side, drink, mquan, squan, dquan) {
        comboTotal = 0;
        totalDiscount = 0;

        if (main == "Chicken" && side == "Mashed Potato" && drink == "Ice Tea") {
            while (mquan > 0 && squan > 0 && dquan > 0) {
                // Add price for combo meals ONLY
                comboTotal = parseFloat(mainprice) + parseFloat(sideprice) + parseFloat(drinkprice);
            
                // Discount for the combo ONLY
                totalDiscount += (comboTotal * 0.10);

                console.log(totalDiscount);
                
                // Decrement the quantity of each item to find how many combos in order
                mquan--;
                squan--;
                dquan--;
            }
            console.log(mainprice);
            console.log(sideprice);
            console.log(drinkprice);
            alert("Chicken Mash Tea Combo applied! 10% off your order!");
            console.log(totalDiscount)
            document.getElementById('disclbl').innerHTML = "Discount: "+ String(totalDiscount);
            const amount = document.getElementById('amount');
            amount.setAttribute('min', String(comboTotal - totalDiscount));
            document.getElementById('totallbl').innerHTML = "Total: "+ String(comboTotal - totalDiscount);
            document.getElementById('total').value = comboTotal - totalDiscount;
            return totalDiscount;
        } else if (main == "Ribeye Steak" && side == "Steamed Vegetables" && drink == "Root Beer") {
            while (mquan > 0 && squan > 0 && dquan > 0) {
                // Add price for combo meals ONLY
                comboTotal = parseFloat(mainprice) + parseFloat(sideprice) + parseFloat(drinkprice);

                // Discount for the combo ONLY
                totalDiscount += (comboTotal * 0.15);

                // Decrement the quantity of each item to find how many combos in order
                mquan--;
                squan--;
                dquan--;
            }
            alert("Steak Veg Beer Combo applied! 15% off your order!");
            document.getElementById('disclbl').innerHTML = "Discount: "+ String(totalDiscount);
            const amount = document.getElementById('amount');
            amount.setAttribute('min', String(comboTotal - totalDiscount));
            document.getElementById('totallbl').innerHTML = "Total: "+ String(comboTotal - totalDiscount);
            document.getElementById('total').value = comboTotal - totalDiscount;
            

            return totalDiscount;
        }

        return totalDiscount;
    }

    // Ask for username
    var uname = prompt("Please enter your username: ");

    const main = document.getElementById('meal').value;
    const side = document.getElementById('sides').value;
    const drink = document.getElementById('drink').value;
    const mainprice = document.getElementById('mainprice').value;
    const sideprice = document.getElementById('sideprice').value;
    const drinkprice = document.getElementById('drinkprice').value;
    const mquan = document.getElementById('mquan').value;
    const squan = document.getElementById('squan').value;
    const dquan = document.getElementById('dquan').value;

    

    var disc = comboChecker(main, side, drink, mquan, squan, dquan);
    console.log(disc);

    
    document.getElementById('username').value = uname;
    document.getElementById('discount').value = disc;

});