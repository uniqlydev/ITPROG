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

        return 0;
    }

    function submitForm(event) {
        event.preventDefault();

        var uname = prompt("Please enter your username: ");
        const amount = document.getElementById('amount').value;
        const meal = document.getElementById('meal').value;
        const sides = document.getElementById('sides').value;
        const drink = document.getElementById('drink').value;
        const mquan = document.getElementById('mquan').value;
        const squan = document.getElementById('squan').value;
        const dquan = document.getElementById('dquan').value;
        var total = document.getElementById('total').value;

        var discount = comboChecker(meal, sides, drink, mquan, squan, dquan);

        total -= discount;

        const data = {
            uname: uname,
            meal: meal,
            sides: sides,
            drink: drink,
            mquan: parseInt(mquan),
            squan: parseInt(squan),
            dquan: parseInt(dquan),
            total: parseFloat(total),
            amount: amount
        };

        fetch('/api/customer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                console.log('Customer created successfully!');
                // Redirect or display a success message as needed
                alert('Payment Successful!');
                window.location.href = "/";
            } else {
                console.error('Failed to create customer');
                alert('Payment Failed!');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
            alert('Payment Failed!');
            // Display an error message or handle the error as needed
        });
    }
});