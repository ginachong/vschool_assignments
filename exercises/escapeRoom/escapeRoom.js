
var readline = require('readline-sync');

var options = ["Put hand in a hole", 
"Find the key", "Open the door"];

var optionsIndex = readline.keyInSelect(options, "Choose an option: ");

function optionResults(){
    for(var i = 0; i < options.length; i++){
        if(optionsIndex == 0)
            return "Oops, you died."
        else if(optionsIndex == 1)
            return "Okay, let's go find the key."
        else if(optionsIndex == 2)
            return "You can't open the door until you find the key."
        else
            return "BYE!"
    }
}
console.log(optionResults());

