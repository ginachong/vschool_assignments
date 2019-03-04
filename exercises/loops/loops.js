var animals = ["dog", "rat", "octopus"];

for(var i = 0; i < animals.length; i++){
    console.log(animals[i]);
}


var numberGrid = [];

for(var i = 0; i < 3; i++){
    numberGrid.push([]);
    for(var x = 0; x < 3; x++){
        numberGrid[i].push(0);
    }
}
console.log(numberGrid);



var numberGrid = [
    [o, 1, 2],
    ["x", "y", "z"],
    [1, 2, 3]
];

for(var i = 0; i < 3; i++){
    for(var x = 0; x < 3; x++){
        numberGrid[i][e] = "x";
    }
}
console.log(numberGrid);