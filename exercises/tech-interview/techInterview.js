// Character Count
// Given a string, return an object that represents the count of how many times each character occurred in the string.

function letterCount(str){

    //split
    const array = str.split("")
    console.log(array)
    
    //for loop --> take first index, count identical characters, ++ counter, splice every instance from array

    

    //return object

}

// Ex
console.log(letterCount("hello world"))  
// {
//   h: 1, 
//   e: 1, 
//   l: 3, 
//   o: 2, 
//   " ": 1 
//   r: 1, 
//   d: 1
// }

console.log(letterCount("apples apples"))
// {
//   a: 2,
//   p: 4,
//   l: 2,
//   e: 2,
//   s: 2
// }

//