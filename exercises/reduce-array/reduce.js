
// function total(arr) {
//     return arr.reduce((a, b)=>{
//         return a + b;
//     });
//  }
 
//  console.log(total([1,2,3])); // 6


//  function stringConcat(arr) {
//     return arr.reduce((a, b) => {
//         return a.toString() + b.toString();
//     })
//  }
 
//  console.log(stringConcat([1,2,3])); // "123"


// function totalVotes(arr) {
//     let counter = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i].voted == true)
//             counter++;
//     }
//     return counter;
//  }
 
//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7


// function shoppingSpree(arr) {
//     let newArray = [];
//     for(var i = 0; i < arr.length; i++){
//         newArray.push(arr[i].price);
//     }
//     return newArray.reduce((a, b) => {
//         return a + b;
//     })
//  }
 
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); // 227005


//  function flatten(arr) {
//    return arr.reduce((a, b) => {
//         return a.concat(b);
//     })
//  }
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
 
//  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   let ageOfVoters = [];
   let youngTotal = 0;
   let youngCounter = 0;
   let midAgeTotal = 0;
   let midAgeCounter = 0;
   let olderTotal = 0;
   let olderCounter = 0;
   for(var i = 0; i < arr.length; i++){
       if(arr[i].age > 17 && arr[i].age < 26){
           youngTotal++;
           if(arr[i].voted == true)
                youngCounter++;
       }
        else if(arr[i].age > 25 && arr[i].age < 36){
            midAgeTotal++;
            if(arr[i].voted == true)
            midAgeCounter++;
        }
        else{
            olderTotal++;
            if(arr[i].voted == true)
                olderCounter++;
        }
    }
   return {
        youngVoters: youngCounter,
        youngTotal: youngTotal,
        middleAgedVoters: midAgeCounter,
        middleAgedTotal: midAgeTotal,
        olderVoters: olderCounter,
        olderTotal: olderTotal
   }
}

console.log(voterResults(voters)); // Returned value shown below:

