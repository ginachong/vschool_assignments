// RETURN LARGEST NUMBER

function largestNumber(num1, num2, num3){
    var max = num1;
    if(num2 > max)
        max = num2;
    if(num3 > max)
        max = num3;
    return max;
}
// console.log(largestNumber(100,2,85))


// EVEN OR ODD

function evenOrOdd(num){
    if(num % 2 === 0)
        return "even";
    else 
        return "odd";
}
// console.log(evenOrOdd(45))


// STRINGS

function stringLength(str){
    if(str.length <= 20)
        return str + str;
    else{
        var x = str.length / 2;
        str = str.slice(0,x)
        return str;
    }
}
//console.log(stringLength("1234567891234567891234"))


// Fibonacci Numbers

function fibonacci(num){
    var numberArray = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    for(var i = 0, sum = 0; i < num; i++){
        sum = sum + numberArray[i];
    }
    return sum;
}
//console.log(fibonacci(5));



