document.addEventListener('DOMContentLoaded', function () {

    function fetchCombos() {
        return fetch('/api/combo')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                throw err; // Rethrow the error to propagate it to the calling code
            });
    }



    function revisedComboChecker(combo) {
        comboTotal = 0;
        totalDiscount = 0;

    }



    

    // function comboChecker(main, side, drink, mquan, squan, dquan) {
    //     comboTotal = 0;
    //     totalDiscount = 0;

    //     if (main == "Chicken" && side == "Mashed Potato" && drink == "Iced Tea") {
    //         while (mquan > 0 && squan > 0 && dquan > 0) {
    //             // Add price for combo meals ONLY
    //             comboTotal = parseFloat(mainprice) + parseFloat(sideprice) + parseFloat(drinkprice);
            
    //             // Discount for the combo ONLY
    //             totalDiscount += (comboTotal * 0.10);

    //             console.log(totalDiscount);
                
    //             // Decrement the quantity of each item to find how many combos in order
    //             mquan--;
    //             squan--;
    //             dquan--;
    //         }
    //         alert("Chicken Mash Tea Combo applied! 10% off your order!");
    //         document.getElementById('disclbl').innerHTML = "Discount: "+ String(totalDiscount);
    //         const amount = document.getElementById('amount');
    //         amount.setAttribute('min', String(comboTotal - totalDiscount));
    //         document.getElementById('totallbl').innerHTML = "Total: "+ String(comboTotal - totalDiscount);
    //         document.getElementById('total').value = comboTotal - totalDiscount;
    //         return totalDiscount;
    //     } 

    //     return totalDiscount;
    // }


    function comboChecker(main,side,drink,mquan,squan,dquan,combo) {
        comboTotal = 0;
        totalDiscount = 0;

        if (main == combo.main && side == combo.sides && drink == combo.drinks) {
            while (mquan > 0 && squan > 0 && dquan > 0) {
                comboTotal = parseFloat(mainprice) + parseFloat(sideprice) + parseFloat(drinkprice);

                totalDiscount += (parseFloat(comboTotal) * combo.discount);

                console.log(totalDiscount);

                mquan--;
                squan--;
                dquan--;
            }

            alert(combo.name + " has been availed! Enjoy your " + (combo.discount * 100) + "%");
            document.getElementById('disclbl').innerHTML = "Discount: " + String(totalDiscount);
            const amount = document.getElementById('amount');
            amount.setAttribute('min',String(comboTotal - totalDiscount));
            document.getElementById('totallbl').innerHTML = "Total: " + String(comboTotal - totalDiscount);
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


    fetchCombos()
    .then(data => {
        const combosArray = data.combos;

        combosArray.forEach(combo => {
            const {id, name, discount, drinks, main, sides} = combo; 

            var disc = comboChecker(main,side,drink,mquan,squan,dquan,combo);

            document.getElementById('username').value = uname;
            document.getElementById('discount').value = disc;
        })
    })
    .catch(error => {
        alert("Error");
    });
    




});