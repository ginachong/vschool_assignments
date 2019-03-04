function isDog(){
    var x = "dog";
    if(typeof x === typeof "cat")
        return x + " is a string.";
    else return x + " is not a string.";
}
console.log(isDog());

function isBoolean(){
    var x = x;
    if(typeof x === typeof false)
        return x + " is indeed a Boolean.";
    else return x + " is definitely not a Boolean.";
}

console.log(isBoolean());

function isDefined(variable){
    if(variable === NaN)
        return "this variable is not defined";
    else return "this variable is defined";
}
console.log(isDefined(123));

function whatIsS(){
    var x = "s";
    if(x > 12)
        return x + " is greater than 12.";
    else return x + " is not greater than 12.";
}
console.log(whatIsS());

function oddOrEven(num){
    if(num % 2 === 0)
        return num + " is even.";
    else return num + " is odd.";
}

console.log(oddOrEven(111));