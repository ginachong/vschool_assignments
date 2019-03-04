//make a string with upper and lower

function upperLower(str){
    return str.toUpperCase() + str.toLowerCase();
}
//console.log(upperLower("hey"));



//takes a string and returns a number half the length rounded down

function halfLength(str){
    var divideInHalf = str.length / 2;
    return Math.floor(divideInHalf);
}
//console.log(halfLength("hellohello111"));




// return the first half of a string

function firstHalf(str){
    return str.slice(0, halfLength(str));
}
//console.log(firstHalf("GinaGross"));




// first half of string upper && second half string lower

function upperPlusLower(str){
    var firstHalf = str.slice(0, halfLength(str));
    var secondHalf = str.slice(halfLength(str), str.length);
    return firstHalf.toUpperCase() + secondHalf.toLowerCase();
}
//console.log(upperPlusLower("My name is Gina. I like boba drinks."));


// capitalize any character following a space

// function capitalize(str){
//     for(var i = 0; i < str.length; i++){
//     var x = str.indexOf(" ") + 1;
//     var y = str.charAt(x)
//     return x.toUpperCase;
//     }
// }
// console.log(capitalize("Hey it's me where are you"));


function capitalize(str){
    var array = str.split(" ");
    var finalString = "";
    for(var i = 0; i < array.length; i++){
        var first = array[i].charAt(0).toUpperCase();
        finalString = finalString + (first + array[i].slice(1,array[i].length) + " ");
    }
    return finalString;
}
console.log(capitalize("Hey it's me, where are you?"));


