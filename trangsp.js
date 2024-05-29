function changeQuantity(amount) {
    var quantityInput = document.getElementById("quantity");
    var currentQuantity = parseInt(quantityInput.value);
    
    if (isNaN(currentQuantity)) {
        currentQuantity = 0;
    }

    var newQuantity = currentQuantity + amount;

    if (newQuantity < 1) {
        newQuantity = 1;
    }

    quantityInput.value = newQuantity;
}