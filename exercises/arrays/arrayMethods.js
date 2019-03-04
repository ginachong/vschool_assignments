// var fruit = ["banana", "apple", "orange", "watermelon"];
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


// function fruitVegetable(){

//     vegetables.pop();

//     fruit.shift();

//     var orangeIndex = fruit.indexOf("orange");

//     fruit.push(orangeIndex);

//     var vegetablesLength = vegetables.length;

//     vegetables.push(vegetablesLength);

//     // console.log("fruit: ", fruit);
//     // console.log("vegetables: ", vegetables); 

//     var food = fruit.concat(vegetables);

//     food.splice(4,2);

//     food.reverse();

//     console.log(food.join());
// }

// console.log(fruitVegetable());


// var fruit = ["banana", "apple", "orange", "watermelon"];
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// function fruitsAndVeggies(){

// vegetables.pop();

// fruit.shift();

// var orangeIndex = fruit.indexOf("orange");

// fruit.push(orangeIndex);

// var veggieLength = vegetables.length;

// vegetables.push(veggieLength);

// var food = fruit.concat(vegetables);

// food.splice(4, 2);

// food.reverse();

// var newFood = food.join();

// return newFood;

// }
// console.log(fruitsAndVeggies());


var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function fruitsAndVeggies(){

    vegetables.pop();

    fruit.shift();

    var indexOfOrange = fruit.indexOf("orange");

    fruit.push(indexOfOrange);

    var lengthOfVegArray = vegetables.length;

    vegetables.push(lengthOfVegArray);

    var food = fruit.concat(vegetables);

    food.splice(4, 2);

    food.reverse();

    return food.join();

}

console.log(fruitsAndVeggies());