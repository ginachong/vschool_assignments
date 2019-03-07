
var goombas = document.getElementById("goombaTotal");
var bobombs = document.getElementById("bobombTotal");
var cheeps = document.getElementById("cheepTotal");
var button = document.getElementById("totalButton");
var showTotal = document.getElementById("finalTotal");

button.addEventListener("click", function(e){
    e.preventDefault();
    showTotal.textContent = Number(goombas.value) + Number(bobombs.value) + Number(cheeps.value);
})