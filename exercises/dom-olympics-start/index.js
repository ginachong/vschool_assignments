
// var header = document.getElementById("header");

// header.addEventListener("online", function(){
//     header.textContent("Javascript Made This!");
// })

// document.getElementById("header").addEventListener('load', function(){
//     document.getElementById("header").textContent = "Javascript Made This!";
// })


// document.getElementById("header").textContent = "Javascript Made This!!";

var h2 = document.createElement("h2");
h2.className = "subHeading";
h2.textContent = "wrote the Javascript";

var h2name = document.createElement("h2");
h2name.className = "name";
h2name.innerHTML = "<span>\"Gina\"</span>";

var h1 = document.createElement("h1");
h1.className = "header";
h1.textContent = "Javascript Made This!!";
// console.log(h1);

var div = document.createElement("div");
div.className = "header";

div.appendChild(h1);
div.appendChild(h2name);
div.appendChild(h2);

document.body.prepend(div);

var message1 = document.getElementsByClassName("message left");
message1[0].textContent = "Hey, what's up?"
message1[1].textContent = "Okay, fly safe";

var message2 = document.getElementsByClassName("message right");
message2[0].textContent = "At the jet";
message2[1].textContent = "Syaaaa!";

document.getElementById("clear-button").addEventListener('click', function(){
    for(var i = 0; i < 2; i++){
        message1[i].textContent = "";
        message2[i].textContent = "";
    }
})

// var options = document.getElementsByTagName("option"); 

// options[0].addEventListener('click', function(){
//     if(options[0].value = "theme-one")
//         message1[0].style.backgroundColor = "red";
//     }
// })
