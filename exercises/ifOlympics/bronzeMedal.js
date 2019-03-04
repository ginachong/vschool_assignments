var person = {
    name: "Bobby",
    age: 12
  }

  function movieAge(){
      if(person.age > 18)
        return person.name + " is allowed to go to the movie."
      else 
        return person.name + " is not allowed to go to the movie."
  }

  console.log(movieAge());

  function nameStartsWithB(){
      if(person.name.shift === "B")
        return person.name + " is allowed to go to the movie."
      else 
        return person.name + " is not allowed to go to the movie."
  }

  console.log(nameStartsWithB());

  function ageAndName(){
      if(person.name.shift === "B" && person.age > 18)
      return person.name + " is allowed to go to the movie."
      else 
        return person.name + " is not allowed to go to the movie."
  }

  console.log(ageAndName());