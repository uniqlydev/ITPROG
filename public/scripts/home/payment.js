document.addEventListener('DOMContentLoaded', function () {
    function comboChecker(main, side, drink, mquan, squan, dquan) {
        var comboDiscount = 0;
        // Connect to sql database
        var mysql = require('mysql');
        var db = mysql.createConnection({
            host: process.env.host,
            user: process.env.user,
            database: process.env.database,
        });

        // Check if combo exists
        db.query('SELECT discount FROM ComboMeals WHERE main = ? AND sides = ? AND drinks = ?;', [main, side, drink], (err, combo) => {
            if (err) {
                console.log(err);
            } else {
                if (combo.length > 0) {
                    // Combo exists
                    comboDiscount = combo[0].discount;
                } else {
                    // Combo does not exist
                    comboDiscount = 0;
                }
            }
        });

        console.log(comboDiscount);
        return comboDiscount;
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