//preliminaries

// for(var i = 9; i >= 0; i--)
//     console.log(i);

// var fruit = ["banana", "orange", "apple", "kiwi"]
// for(var i = 0; i < fruit.length; i++)
//     console.log(fruit[i]);

//BRONZE MEDAL

// var numbers = [];
// for(var i = 0; i < 10; i++)
//     numbers[i] = i;
// console.log(numbers);


// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// for(var i = 0; i < fruit.length; i+=2)
//     console.log(fruit[i]);


//SILVER MEDAL

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ];


//   for(var i = 0; i < peopleArray.length; i++)
//     console.log(peopleArray[i].name);

// var names = [];
// var occupations = [];
// for(var i = 0; i < peopleArray.length; i++){
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i].occupation);
// }
// console.log(names, occupations);

var names = [];
var occupations = [];
for(var i = 0; i < peopleArray.length; i+=2){
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i+1].occupation);
}
// console.log(names, occupations);



//GOLD MEDAL

var arrayZero = [];
for(var i = 0;  i < 3; i++){
    arrayZero.push([]);
    for(var x = 0; x < 3; x++)
        arrayZero[i].push(0);
}
// console.log(arrayZero);

var arrayZero = [];
for(var i = 0;  i < 3; i++){
    arrayZero.push([]);
    for(var x = 0; x < 3; x++)
        arrayZero[i].push(i);
}
// console.log(arrayZero);

var arrayZero = [];
for(var i = 0;  i < 3; i++){
    arrayZero.push([]);
    for(var x = 0; x < 3; x++)
        arrayZero[i].push(x);
}
//console.log(arrayZero);

var arrayZero = [];
for(var i = 0;  i < 3; i++){
    arrayZero.push([]);
    for(var x = 0; x < 3; x++)
        arrayZero[i].push("x");
}
//console.log(arrayZero);
