// Variables for subtotal and total
var totl = 0;
var subtotal = 0;

var mainSelected, sideSelected, drinkSelected;

var mcounter = 0;



function add(price) {
    total += price;
    document.getElementById('total').value = total;
    total.value = subtotal.toString();
}

function checkFields(event) {
    let mainField = document.getElementById('mainm').value;
    let sideField = document.getElementById('sides').value;
    let drinkField = document.getElementById('drinks').value;

    if (mainField == "" && sideField == "" && drinkField == "") {
        alert("Please fill out at least 1 field");
        event.preventDefault();
    }
}

function clearOrder() {
    document.getElementById('mainm').value = "";
    document.getElementById('drinks').value = "";
    document.getElementById('sides').value = "";

    document.getElementById('quantitymain').value = 0;
    document.getElementById('quantitydrink').value = 0;
    document.getElementById('quantityside').value = 0;

    document.getElementById('total').value = 0;

    // Enable buttons
    document.getElementById('meals1').disabled = false;
    document.getElementById('meals2').disabled = false;
    document.getElementById('meals3').disabled = false;

    document.getElementById('drinks1').disabled = false;
    document.getElementById('drinks2').disabled = false;
    document.getElementById('drinks3').disabled = false;

    document.getElementById('sides1').disabled = false;
    document.getElementById('sides2').disabled = false;
    document.getElementById('sides3').disabled = false;

    // Reset variables
    subtotal = 0;
    totl = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    // Drinks
    const drinks1 = document.getElementById('drinks1');
    const drinks2 = document.getElementById('drinks2');
    const drinks3 = document.getElementById('drinks3');

    // Meals
    const meals1 = document.getElementById('meals1');
    const meals2 = document.getElementById('meals2');
    const meals3 = document.getElementById('meals3');


    // Sides
    const sides1 = document.getElementById('sides1');
    const sides2 = document.getElementById('sides2');
    const sides3 = document.getElementById('sides3');

    var mainm = document.getElementById('mainm');
    var drinks = document.getElementById('drinks');
    var side = document.getElementById('sides');

    const total = document.getElementById('total');

    const mquan = document.getElementById('quantitymain');
    const squan = document.getElementById('quantityside');
    const dquan = document.getElementById('quantitydrink');

    // get button
    const madd = document.getElementById('madd');
    const msubtract = document.getElementById('msubtract');
    const sadd = document.getElementById('sadd');
    const ssubtract = document.getElementById('ssubtract');
    const dadd = document.getElementById('dadd');
    const dsubtract = document.getElementById('dsubtract');

    madd.addEventListener('click', () => {
        subtotal += mainSelected;
        total.value = subtotal.toString();

        mquan.value = parseInt(mquan.value) + 1;

    });

    msubtract.addEventListener('click', () => {
        subtotal -= mainSelected;
        total.value = subtotal.toString();

        mquan.value = parseInt(mquan.value) - 1;

        if (mquan.value == 0) {
            mainm.value = "";
            meals1.disabled = false;
            meals2.disabled = false;
            meals3.disabled = false;

            mquan.setAttribute('disabled', 'true');
            mquan.setAttribute('readonly', 'true');

            mainm.setAttribute('hidden', 'true');
            mquan.setAttribute('hidden', 'true');  
            
            madd.setAttribute('hidden', 'true');
            msubtract.setAttribute('hidden', 'true');
        }
    });

    sadd.addEventListener('click', () => {
        subtotal += sideSelected;
        total.value = subtotal.toString();

        squan.value = parseInt(squan.value) + 1;
    });

    ssubtract.addEventListener('click', () => {
        subtotal -= sideSelected;
        total.value = subtotal.toString();

        squan.value = parseInt(squan.value) - 1;

        if (squan.value == 0) {
            side.value = "";
            sides1.disabled = false;
            sides2.disabled = false;
            sides3.disabled = false;

            squan.setAttribute('disabled', 'true');
            squan.setAttribute('readonly', 'true');

            side.setAttribute('hidden', 'true');
            squan.setAttribute('hidden', 'true');

            sadd.setAttribute('hidden', 'true');
            ssubtract.setAttribute('hidden', 'true');
        }
    });

    dadd.addEventListener('click', () => {
        subtotal += drinkSelected;
        total.value = subtotal.toString();

        dquan.value = parseInt(dquan.value) + 1;

    });

    dsubtract.addEventListener('click', () => {
        subtotal -= drinkSelected;
        total.value = subtotal.toString();

        dquan.value = parseInt(dquan.value) - 1;

        if (dquan.value == 0) {
            drinks.value = "";
            drinks1.disabled = false;
            drinks2.disabled = false;
            drinks3.disabled = false;

            dquan.setAttribute('disabled', 'true');
            dquan.setAttribute('readonly', 'true');

            drinks.setAttribute('hidden', 'true');
            dquan.setAttribute('hidden', 'true');

            dadd.setAttribute('hidden', 'true');
            dsubtract.setAttribute('hidden', 'true');

        }
    });



    meals1.addEventListener('click', () => {
        mquan.value = "1";
        mainm.value = "Ribeye Steak";
    
        subtotal += 900;
        total.value = subtotal.toString();

        meals1.disabled = true;
        meals2.disabled = true;
        meals3.disabled = true;

        mquan.removeAttribute('disabled');
        mquan.removeAttribute('readonly');
        mquan.removeAttribute('hidden');
        mainm.removeAttribute('hidden');

        madd.removeAttribute('hidden');
        msubtract.removeAttribute('hidden');
        madd.removeAttribute('disabled');
        msubtract.removeAttribute('disabled');

        mainSelected = 900;
    });

    meals2.addEventListener('click', () => {
        mainm.value = "Salmon Steak";

        mquan.value = 1;

        subtotal += 850;
        total.value = subtotal.toString();

        meals1.disabled = true;
        meals2.disabled = true;
        meals3.disabled = true;

        mquan.removeAttribute('disabled');
        mquan.removeAttribute('readonly');
        mquan.removeAttribute('hidden');
        mainm.removeAttribute('hidden');

        madd.removeAttribute('hidden');
        msubtract.removeAttribute('hidden');
        madd.removeAttribute('disabled');
        msubtract.removeAttribute('disabled');

        mainSelected = 850;


    });

    meals3.addEventListener('click', () => {
        mainm.value = "Chicken";

        mquan.value = 1;

        subtotal += 300;
        total.value = subtotal.toString();

        meals1.disabled = true;
        meals2.disabled = true;
        meals3.disabled = true;

        mquan.removeAttribute('disabled');
        mquan.removeAttribute('readonly');
        mquan.removeAttribute('hidden');
        mainm.removeAttribute('hidden');

        madd.removeAttribute('hidden');
        msubtract.removeAttribute('hidden');
        madd.removeAttribute('disabled');
        msubtract.removeAttribute('disabled');

        mainSelected = 300;
    });

    drinks1.addEventListener('click', () => {
        drinks.value = "Iced Tea";

        dquan.value = 1;

        subtotal += 55;
        total.value = subtotal.toString();

        drinks1.disabled = true;
        drinks2.disabled = true;
        drinks3.disabled = true;

        dquan.removeAttribute('disabled');
        dquan.removeAttribute('readonly');
        dquan.removeAttribute('hidden');
        drinks.removeAttribute('hidden');

        dadd.removeAttribute('hidden');
        dsubtract.removeAttribute('hidden');
        dadd.removeAttribute('disabled');
        dsubtract.removeAttribute('disabled');

        drinkSelected = 55;
    });

    drinks2.addEventListener('click', () => {
        drinks.value = "Root Beer";

        dquan.value = 1;

        subtotal += 60;
        total.value = subtotal.toString();

        drinks1.disabled = true;
        drinks2.disabled = true;
        drinks3.disabled = true;

        dquan.removeAttribute('disabled');
        dquan.removeAttribute('readonly');
        dquan.removeAttribute('hidden');
        drinks.removeAttribute('hidden');

        dadd.removeAttribute('hidden');
        dsubtract.removeAttribute('hidden');
        dadd.removeAttribute('disabled');
        dsubtract.removeAttribute('disabled');

        drinkSelected = 60;
    });

    drinks3.addEventListener('click', () => {
        drinks.value = "Water";

        dquan.value = 1;

        subtotal += 20;
        total.value = subtotal.toString();

        drinks1.disabled = true;
        drinks2.disabled = true;
        drinks3.disabled = true;

        dquan.removeAttribute('disabled');
        dquan.removeAttribute('readonly');
        dquan.removeAttribute('hidden');
        drinks.removeAttribute('hidden');

        dadd.removeAttribute('hidden');
        dsubtract.removeAttribute('hidden');
        dadd.removeAttribute('disabled');
        dsubtract.removeAttribute('disabled');


        drinkSelected = 20;
    });

    sides1.addEventListener('click', () => {
        side.value = "Baked Potato";

        squan.value = 1;

        subtotal += 80;
        total.value = subtotal.toString();

        sides1.disabled = true;
        sides2.disabled = true;
        sides3.disabled = true;

        squan.removeAttribute('disabled');
        squan.removeAttribute('readonly');
        squan.removeAttribute('hidden');
        sides.removeAttribute('hidden');

        sadd.removeAttribute('hidden');
        ssubtract.removeAttribute('hidden');
        sadd.removeAttribute('disabled');
        ssubtract.removeAttribute('disabled');

        sideSelected = 80;
    });

    sides2.addEventListener('click', () => {
        side.value = "Mashed Potato";

        squan.value = 1;

        subtotal += 75;
        total.value = subtotal.toString();

        sides1.disabled = true;
        sides2.disabled = true;
        sides3.disabled = true;

        squan.removeAttribute('disabled');
        squan.removeAttribute('readonly');
        squan.removeAttribute('hidden');
        sides.removeAttribute('hidden');

        sadd.removeAttribute('hidden');
        ssubtract.removeAttribute('hidden');
        sadd.removeAttribute('disabled');
        ssubtract.removeAttribute('disabled');

        sideSelected = 75;
    });

    sides3.addEventListener('click', () => {
        side.value = "Steamed Vegetables";

        squan.value = 1;

        subtotal += 50;
        total.value = subtotal.toString();

        sides1.disabled = true;
        sides2.disabled = true;
        sides3.disabled = true;

        squan.removeAttribute('disabled');
        squan.removeAttribute('readonly');
        squan.removeAttribute('hidden');
        sides.removeAttribute('hidden');

        sadd.removeAttribute('hidden');
        ssubtract.removeAttribute('hidden');
        sadd.removeAttribute('disabled');
        ssubtract.removeAttribute('disabled');
        
        sideSelected = 50;
    });

    
});