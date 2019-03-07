
var addNumber1 = document.add.addNumber1;
var addNumber2 = document.add.addNumber2;
var addButton = document.getElementById("addButton");

var subtractNumber1 = document.subtract.subtractNumber1;
var subtractNumber2 = document.subtract.subtractNumber2;
var subtractButton = document.getElementById("subtractButton");

var multiplyNumber1 = document.multiply.multiplyNumber1;
var multiplyNumber2 = document.multiply.multiplyNumber2;

function add() {
    return Number(addNumber1.value) + Number(addNumber2.value);
}

function subtract() {
    return Number(subtractNumber1.value) - Number(subtractNumber2.value);
}

function multiply(){
    return Number(multiplyNumber1.value) * Number(multiplyNumber2.value);
}

addButton.addEventListener("click", function(e){
    e.preventDefault();
    document.add.sum.value = add();
})

subtractButton.addEventListener("click", function(e){
    e.preventDefault();
    document.subtract.difference.value = subtract();
})

multiplyButton.addEventListener("click", function(e){
    e.preventDefault();
    document.multiply.product.value = multiply();
})