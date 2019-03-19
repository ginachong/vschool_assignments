
//Find the frequency of all characters in a given word or phrase, 
//and print them to the console.

//split into an array and loop through the array with
//a conditional statement


// countCharacters = (str) => {
//     let newArray = [];
//     for(var i = 0; i < str.length; i++){
//         let counter = 0;
//         for(var x = 0; x < str.length; x++){
//             if(str[x] === str[i])
//                 counter++;
//         }
//         newArray[str[i]] = counter;    //this works because object properties are unique (ie can't have multiple properties with same name)
//     }
//     return newArray;
// }

// console.log(countCharacters('slimy smelly solution'));


// let matrix = [
//     [1,2,3],
//     [5,6,7],
//     [9,8,4]
// ]

// for(var i = 0; i < 3; i++){
//     for(var x = 0; x < 3; x++){
//         matrix[i][x] = matrix[i][x] * 0;
//     }
// }
// console.log(matrix)

function Person (name, isAlive, hairColor){
    this.name = name;
    this.isAlive = isAlive;
    this.hairColor = hairColor;
    this.speak = () => {console.log(this.name)}
}

student1 = new Person ("Gina", true, "Dark Brown");

student1.speak();
