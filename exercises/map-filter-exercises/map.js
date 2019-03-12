
// function doubleNumbers(arr){
//     let newArray = arr.map(function(arrItem){
//         return arrItem * 2;
//     })
//     return newArray;
//   }
  
//   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]



//   function stringItUp(arr){
//     let stringArray = arr.map(arrItem => {
//         return arrItem.toString();
//     })
//     return stringArray;
//   }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]



//   function capitalizeNames(arr){
//     let names = arr.map(name => {
//         return name.toUpperCase();
//     })
//     return names;
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]


// function namesOnly(arr){
//     let names = arr.map(nameItem => {
//         return nameItem.name;
//     })
//     return names;
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]



//   function makeStrings(arr){
//     let nameAndOldEnough = arr.map(item => {
//         if(item.age > 18)
//             return `${item.name} can go to the Matrix.`
//         else
//             return `${item.name} cannot go to the Matrix.`
//     })
//     return nameAndOldEnough;
//   }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 



function readyToPutInTheDOM(arr){
    let nameAgeHeaders = arr.map(index => {
        return `<h1>${index.name}</h1><h2>${index.age}</h2>`
    })
    return nameAgeHeaders;
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 



//Replace Albert with my name: (Quiz week 2)
// replaceName = (str) => {
//     // let newStr = "";
//     let array = str.split(" ");
//     array.splice(4, 1, "Gina");
//     return array.join(" ")
// }
// console.log(replaceName("Hello my name is Albert"))