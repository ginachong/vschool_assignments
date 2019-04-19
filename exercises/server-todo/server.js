const express = require("express")
const app = express()
const uuidv4 = require("uuid/v4")

let bounties = [
    {
        firstName: "Uncle",
        lastName: "Owen",
        living: false,
        bountyAmount: 1000,
        type: "Jedi",
        _id: uuidv4(),
    },
    {
        firstName: "Ewan",
        lastName: "McGregor",
        living: true,
        bountyAmount: 50000,
        type: "Jedi",
        _id: uuidv4(),
    },
    {
        firstName: "Yoda",
        lastName: "",
        living: false,
        bountyAmount: 1000000,
        type: "Jedi",
        _id: uuidv4(),
    },
    {
        firstName: "Darth",
        lastName: "Sidious",
        living: false,
        bountyAmount: 50000,
        type: "Sith",
        _id: uuidv4(),
    },
    {
        firstName: "hot",
        lastName: "guy",
        living: true,
        bountyAmount: 1000000,
        type: "Sith",
        _id: uuidv4(),
    },
]

//Middleware
app.use(express.json())

app.get("/bounties", (req, res) => {
    res.send(bounties)
})

app.post("/bounties", (req, res) => {
    const newBounty = req.body;
    newBounty._id = uuidv4();
    bounties.push(newBounty);
    res.send(bounties)
})

app.delete("/bounties/:_id", (req, res) => {
    const bountyToDelete = bounties.find(bounty => bounty._id === req.params._id)
    const newBounties = bounties.filter(bounty => bounty._id !== bountyToDelete._id)
    bounties = newBounties
    res.send(bounties)
})

app.put("bounties/:_id", (req, res) => {
    const bountyToEdit = bounties.find(bounty => bounty._id === req.params._id)
    
})







app.listen(7000, () => {
    console.log("it's working")
})