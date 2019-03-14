
//Find the frequency of all characters in a given word or phrase, 
//and print them to the console.

//split into an array and loop through the array with
//a conditional statement


countCharacters = (str) => {
    let newArray = [];
    for(var i = 0; i < str.length; i++){
        let counter = 0;
        for(var x = 0; x < str.length; x++){
            if(str[x] === str[i])
                counter++;
        }
        newArray[str[i]] = counter;    //this works because object properties are unique (ie can't have multiple properties with same name)
    }
    return newArray;
}

console.log(countCharacters('slimy smelly solution'));


//     let finalArray = []
//     for(var i = 0; i < newArray.length; i++){
//         for(var x = i + 1; x < newArray.length; x++){
//             finalArray.push(newArray[i]);
//             if(newArray[i] === newArray[x]){
//                 finalArray.splice(x, 1);
//             }
//         }
//     }
//     return finalArray;
// }
// let temp;
// for(var i = 0; i < newArray.length; i++){
//     let originalLength = newArray.length;
//     if(newArray[i] === newArray[i + 1]){
//         newArray.splice(newArray[i + 1]);
//         break;
//     }
//     if(originalLength !== newArray.length){
        
//     }
// }

// console.log(countCharacters("lllllll ggggg hello gggg yylg"))




// let letters = {};

// countLetters = (str) => {
//     for(var i = 0; i < str.length; i++){
//         let charCount = str.count(str[i]);
//         letters[str[i]] = charCount;
//     }
// }


// console.log(letters)
