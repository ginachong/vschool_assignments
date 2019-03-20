// import Axios from "axios";

axios.get("https://api.vschool.io/gina/todo").then((response) => {
    console.log(response.data);
})

createToDo = (toDo) =>{
    //add dom elements
}

post = () =>{
    axios.post(("https://api.vschool.io/gina/todo"),{
        //entire post ----> why is ID added automatically?
    }).then((response) =>{
        //call createToDo
    })
}

let checkBox1;
checkBox1.addEventListener("click", e => {
        axios.put(("https://api.vschool.io/gina/todo" + e.target._id), {
            completed: true
        }).then((response) =>{
            //update dom accordingly
        })
})
