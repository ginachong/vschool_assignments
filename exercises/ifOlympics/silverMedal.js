function equalSigns(){
    if(1 === "1")
        return "strict";
    else if(1 == 1)
        return "loose";
    else return" not equal at all";
}

console.log(equalSigns());

function OneAndTwo(){
    if(1 <=2 && 2 === 4)
        return "yes";
    else return "no";
}

console.log(OneAndTwo());