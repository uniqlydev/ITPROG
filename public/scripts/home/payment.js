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



    function comboChecker(main,side,drink,mquan,squan,dquan,combo) {
        comboTotal = 0;
        totalDiscount = 0;

        console.log(main);
        console.log(side);
        console.log(drink);

        if (main == combo.main && side == combo.sides && drink == combo.drinks) {
            while (mquan > 0 && squan > 0 && dquan > 0) {
                comboTotal = parseFloat(mainprice) + parseFloat(sideprice) + parseFloat(drinkprice);

                totalDiscount += (parseFloat(comboTotal) * combo.discount);


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


    const meal = document.getElementById('meal').value;
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

            var disc = comboChecker(meal,side,drink,mquan,squan,dquan,combo);

            document.getElementById('username').value = uname;
            document.getElementById('discount').value = disc;
        })
    })
    .catch(error => {
        alert("Error");
    });
    




});