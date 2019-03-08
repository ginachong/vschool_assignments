var readlineSync = require('readline-sync');

function addNumbers(num1, num2){
    return num1 + num2;
}

function multiplyNumbers(num1, num2){
    return num1 * num2;
}

function divideNumbers(num1, num2){
    return num1 / num2;
}

function subtractNumbers(num1, num2){
    return num1 - num2;
}

var firstNumber = readlineSync.question("Please enter your first number: ");
var secondNumber = readlineSync.question("Please enter your second number: ");
var operations = ["add", "subtract", "multiply", "divide"];
var operationsIndex = readlineSync.keyInSelect(operations, "Please enter the operation to perform: ");

function returnNumber(){
    for(var i = 0; i < operations.length; i++){
        if(operationsIndex == 0)
            return addNumbers(firstNumber, secondNumber);
        else if(operationsIndex == 1)
            return subtractNumbers(firstNumber, secondNumber);
        else if(operationsIndex == 2)
            return multiplyNumbers(firstNumber, secondNumber);
        else if(operationsIndex == 3)
            return divideNumbers(firstNumber, secondNumber);
    }
}

console.log("The result is: " + returnNumber());
