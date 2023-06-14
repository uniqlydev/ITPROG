function addQuantity() {
    var quantity = document.getElementById("quantity").innerHTML;
    quantity++;
    document.getElementById("quantity").innerHTML = quantity;
}

function removeQuantity() {
    var quantity = document.getElementById("quantity").innerHTML;
    if (quantity > 0) {
        quantity--;
        document.getElementById("quantity").innerHTML = quantity;
    } else {
        alert("Quantity cannot be less than 0");
    }
}