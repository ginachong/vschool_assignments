
let hoverElement1 = document.getElementById("hoverOne");
let hoverElement2 = document.getElementById("hoverTwo");
let hoverElement3 = document.getElementById("hoverThree");
let hoverElement4 = document.getElementById("hoverFour");
let hoverElement5 = document.getElementById("hoverFive");

//--------------------------------------------------1

hoverElement1.addEventListener("mouseover", e => {
    e.target.innerHTML = "%";
})

hoverElement1.addEventListener("mouseout", e => {
    e.target.innerHTML = "5";
})

//--------------------------------------------------2

hoverElement2.addEventListener("mouseover", e => {
    e.target.innerHTML = "#";
})

hoverElement2.addEventListener("mouseout", e => {
    e.target.innerHTML = "3";
})

//--------------------------------------------------3

hoverElement3.addEventListener("mouseover", e => {
    e.target.innerHTML = "C";
})

hoverElement3.addEventListener("mouseout", e => {
    e.target.innerHTML = "c";
})

//--------------------------------------------------4

hoverElement4.addEventListener("mouseover", e => {
    e.target.innerHTML = "A";
})

hoverElement4.addEventListener("mouseout", e => {
    e.target.innerHTML = "a";
})

//--------------------------------------------------5

hoverElement5.addEventListener("mouseover", e => {
    e.target.innerHTML = "G";
})

hoverElement5.addEventListener("mouseout", e => {
    e.target.innerHTML = "g";
})