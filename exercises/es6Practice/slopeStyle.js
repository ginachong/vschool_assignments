// collectAnimals = (...animals) => {  
//     return animals;
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]


// function combineFruit(fruit, sweets, vegetables){
//     let foodArray = [...fruit, ...sweets, ...vegetables];
//     let foodObject = {};
//    {fruit, sweets, vegetables} = foodObject;
//     // for(let i = 0; i < foodArray.length, i++)
//     //     {foodArray[i]} = foodObject;
//     return foodObject;
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrit"])


// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };
  
// let {location, duration} = vacation;

//  parseSentence = () => {
//     return `We're going to have a good time in ${location} for ${duration}`
//   }

//   console.log(parseSentence());

// returnFirst = items => {
//     const [firstItem] = items; /*change this line to be es6*/
//     return firstItem;
// }

// console.log(returnFirst([1,2,3]));

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     let [firstFav, secondFav, thirdFav] = favoriteActivities;
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
// }

// console.log(returnFavorites(returnFavorites(favoriteActivities)));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// combineAnimals = (arr1, arr2, arr3) => {  
//     animalArray = [...arr1, ...arr2, ...arr3];
//     return animalArray;
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

//Black Diamond

product = (...numbers) => {  
  
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }

  console.log(product(a, b, c, d, e));


