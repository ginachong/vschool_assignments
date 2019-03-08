
const ownerName = "John"
let age = 101
let pets = ["cat", "dog"]
let petObjects = []

runForLoop = () => {
    let name = "";
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        pet.name = name
        petObjects.push(pet)
    }
    return name
}

console.log(runForLoop());