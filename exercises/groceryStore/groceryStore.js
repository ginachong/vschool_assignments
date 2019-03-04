var shopper = {
    name: "Gina",
    age: 31,
    female: true,
    howManyWrinkles: function(){
        if(shopper.age > 30)
            return shopper.name + " probably has some wrinkles."
        else 
            return shopper.name + " probably doesn't have many wrinkles."
    },
    groceryCart: ["apples", "oranges", "bread", "juice", "jam"]
}
console.log(shopper.howManyWrinkles());