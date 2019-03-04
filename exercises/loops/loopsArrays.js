var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", 
"computer", "lamp", "stapler", "computer",  "computer"]

for(var i = 0, counter = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer")
        counter++
}
console.log(counter);

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18){
          if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female")
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough, let her in.");
          else
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough, let him in.");
      }
     else {
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female")
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough, let her in.");
        else
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough, let him in.");
    }   
}


//Optional Bonus Challenge - Light Toggling

var array1 = [2, 5, 435, 4, 3];
var array2 = [1, 1, 1, 1, 3];
var array3 = [9, 3, 4, 2];

function lightToggle(array){

for(var i = 0; i < array.length; i++){
    console.log(array[i] % 2 === 0 ? "On" : "Off");
  
}
}

lightToggle(array3);










