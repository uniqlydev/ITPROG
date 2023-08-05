let comboDetected;

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

        if (main == combo.main && side == combo.sides && drink == combo.drinks) {
            comboTotal = parseFloat(mainprice) + parseFloat(sideprice) + parseFloat(drinkprice);

            totalDiscount = (parseFloat(comboTotal) * combo.discount);
            console.log("Combo total: " + totalDiscount);

            alert(combo.name + " has been availed! Enjoy your " + (combo.discount * 100) + "%");
            document.getElementById('disclbl').innerHTML = "Discount: " + String(totalDiscount);
            console.log(String(document.getElementById('total').value));
            document.getElementById('totallbl').innerHTML = "Total: " + String(parseFloat(document.getElementById('total').value) - totalDiscount);
            document.getElementById('amount').setAttribute('min', String(parseFloat(document.getElementById('total').value) - totalDiscount));

            comboDetected = true;

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
    const total = document.getElementById('total').value;

    console.log("total: " + parseFloat(total));



    fetchCombos()
    .then(data => {
        const combosArray = data.combos;

        combosArray.forEach(combo => {
            const {id, name, discount, drinks, main, sides} = combo; 

            if (!comboDetected) {
                var disc = comboChecker(meal,side,drink,mquan,squan,dquan,combo);
                console.log("disc: " + disc);
                document.getElementById('username').value = uname;
                document.getElementById('discount').value = String(disc);
            }else {

            }

        })
    })
    .catch(error => {
        alert("Error");
    });
    




});