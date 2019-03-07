
var square1 = document.getElementById("square1");

square1.addEventListener("mouseover", function(e){
    square1.style.backgroundColor = "blue";
})

square1.addEventListener("mousedown", function(e){
    square1.style.backgroundColor = "red";
})

square1.addEventListener("mouseup", function(e){
    square1.style.backgroundColor = "yellow";
})

square1.addEventListener("dblclick", function(e){
    square1.style.backgroundColor = "green";
})

document.addEventListener("scroll", function(e){
    square1.style.backgroundColor = "orange";
})

document.addEventListener("keypress", function(e){
    if(e.keyCode === 82)
        square1.style.backgroundColor = "red";
})

// document.addEventListener("keypress", function(e){
//     if(e.keyCode == 66)
//         square1.style.backgroundColor = "blue";
// })

// document.addEventListener("keypress", function(e){
//     if(e.keyCode == 89)
//         square1.style.backgroundColor = "yellow";
// })

// document.addEventListener("keypress", function(e){
//     if(e.keyCode == 71)
//         square1.style.backgroundColor = "green";
// })

// document.addEventListener("keypress", function(e){
//     if(e.keyCode == 79)
//         square1.style.backgroundColor = "orange";
// })
