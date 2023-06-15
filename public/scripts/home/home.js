const Order = require('../../models/order.js')

const order = new Order();

// Add event listener to minus button
document.addEventListener('DOMContentLoaded', () => {
    const quantity = document.getElementById('quantity');
    const minusbutton = document.getElementById('minus-button');
    const plusbutton = document.getElementById('add-button');

    minusbutton.addEventListener('click', (id) => {
        const item = document.getElementById(id);

        
    });

    plusbutton.addEventListener('click', () => {

    });
});



