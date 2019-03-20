// let axios = require("axios");
let axiosInfo;

axios.get('https://api.vschool.io/gina/todo').then((response) => {
    axiosInfo = response.data;
    for(let i = 0; i < axiosInfo.length; i++){
        createToDo(axiosInfo[i]);
    }
    checkBoxes();    //understand this
    deleteItem();
})

checkBoxes = () => {
    let checkBoxArray = document.getElementsByName("checkBox");
    for(let i = 0; i < checkBoxArray.length; i++){
    checkBoxArray[i].addEventListener("change", (e) => {
        if(checkBoxArray[i].checked = true){
            axios.put('https://api.vschool.io/gina/todo/' + e.target.id, {
                completed: true
            }).then((response) => {
                checkBoxArray[i].parentElement.firstChild.style.textDecoration = "line-through";
            })
        }
            })
    }
    // checkBoxArray[i].addEventListener("change", e => {
    //     if(checkBoxArray[i].checked != true){
    //         axios.put('https://api.vschool.io/gina/todo/' + e.target.id, {
    //             completed: false
    //         }).then((response) => {
    //             checkBoxArray[i].parentElement.firstChild.style.textDecoration = "none";
    // })
    //     }
    // })
}

deleteItem = () => {
    let deleteArray = document.getElementsByClassName("delete");
    for(let i = 0; i < deleteArray.length; i++){
        deleteArray[i].addEventListener("click", e => {
            axios.delete('https://api.vschool.io/gina/todo/' + e.target.id).then((response) => {
                alert("To do list item successfully deleted. Refresh the page to see changes.")
            })
            })
        }
    }


createToDo = (info) => {
    let div = document.createElement("div");
    div.className = "container";

    let title = document.createElement("h4");
    title.className = "title";
    title.textContent = info.title;          //no value?

    let description = document.createElement("p");
    description.className = "description";
    description.textContent = info.description;

    let price = document.createElement("p");
    price.className = "price";
    price.innerHTML = `Price: ${info.price}`;

    let img = document.createElement("img");
    img.className = "img";
    img.src = info.imgUrl;
    img.style.maxHeight = "200px";

    let completed = document.createElement("p");
    completed.className = "completed";
    completed.textContent = "Complete: "
    // completed.textContent = `Completed: ${info.completed}`;

    let line = document.createElement("hr");

    let checkBox = document.createElement("input");
    checkBox.name = "checkBox";
    checkBox.type = "checkbox";
    checkBox.id = info._id;

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.id = info._id;
    deleteButton.innerText = "Delete";
    
    let lineBreak = document.createElement("br");

    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(img);
    div.appendChild(completed);
    div.appendChild(checkBox);
    div.appendChild(lineBreak);
    div.appendChild(deleteButton);
    div.appendChild(line);
    document.getElementById("column1").appendChild(div);
    
    if(info.completed === true){
        checkBox.checked = true;                        //noice
        title.style.textDecoration = "line-through";
    }
}

document.newToDo.addEventListener("submit", e => {
    e.preventDefault();
    axios.post('https://api.vschool.io/gina/todo', {
        title: `To Do ${axiosInfo.length + 1}`,
        description: document.newToDo.description.value,
        price: document.newToDo.price.value,
        imgUrl: document.newToDo.img.value,
        completed: false
    }).then((response) => {
        createToDo(response.data);
    })
});



//make even listener for when checkbox is clicked or unclicked (checked)

// checkBoxes = () => {
//     let checkBoxArray = document.getElementsByName("checkBox");
//     for(let i = 0; i < checkBoxArray.length; i++){
//     checkBoxArray[i].addEventListener("change", () => {
//         if(checkBoxArray[i].checked = true){
//             axios.put('https://api.vschool.io/gina/todo', {
//                 completed: true
//             }).then((response) => {
//                 checkBoxArray[i].parentElement.title.style.textDecoration = "line-through";
//             })
//         }
//     })
//     }
// }

// checkBoxes();


