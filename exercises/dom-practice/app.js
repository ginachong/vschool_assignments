
let axios = require("axios");
let info;

axios.get("https://api.vschool.io/gina/todo").then((response) => {
    info = response.data;
    for(let i = 0; i < info.length; i++){
    createToDo(info[i]);
    }
})

/*------------------------------------------*/

createToDo = (info) => {

    let button = document.createElement("BUTTON");
    // button.textContent = info.description;
    document.body.appendChild(button);

    // let p = document.createElement("P");
    // p.innerHTML = info.title;
    // document.body.appendChild(p);
    // console.log(info.title);
}





// let div = document.createElement("div");
// let p = document.createElement("p");
// p.innerHTML = "practice";
// div.append(p);
// document.body.appendChild(div);

