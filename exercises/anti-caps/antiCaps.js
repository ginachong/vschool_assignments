let emptyString = "";

antiCaps = (str) => {
    for(var i = 0; i < str.length; i++){
        let char = str[i];
        if(char == char.toUpperCase())
            emptyString += char.toLowerCase();
        else
            emptyString += char.toUpperCase();
    }
    return emptyString;
}

console.log(antiCaps("whAt to Do"));