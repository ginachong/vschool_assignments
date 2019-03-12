
// function fiveAndGreaterOnly(arr) {
//     let largeWords = arr.filter(index => {
//         return index >= 5
//     })
//     return largeWords;
//   }
//   // test
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


// function evensOnly(arr) {
//     let evenArray = arr.filter(number => {
//         return number % 2 == 0;
//     })
//     return evenArray;
//   }
//   // test
//   console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]


//  function fiveCharactersOrFewerOnly(arr) {
//     let fiveOrFewer = arr.filter(string => {
//         return string.length < 6;
//     })
//     return fiveOrFewer;
//   }
//   //test
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));



//   function peopleWhoBelongToTheIlluminati(arr){
//     let clubMembers = arr.filter(people => {
//         return people.member == true;
//     })
//     return clubMembers;
//   }
//   // test
//   console.log(peopleWhoBelongToTheIlluminati([
//       {
//           name: "Angelina Jolie",
//           member: true
//       },
//       {
//           name: "Eric Jones",
//           member: false
//       },
//       {
//           name: "Paris Hilton",
//           member: true
//       },
//       {
//           name: "Kayne West",
//           member: false
//       },
//       {
//           name: "Bob Ziroll",
//           member: true
//       }
//   ]));


function ofAge(arr){
    let oldEnough = arr.filter(people => {
        return people.age > 17;
    })
    return oldEnough;
  }
  // test
  console.log(ofAge([
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