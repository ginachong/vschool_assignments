
//Find the frequency of all characters in a given word or phrase, 
//and print them to the console.

let letters = {};

countLetters = (str) => {
    for(var i = 0; i < str.length; i++){
        let charCount = str.count(str[i]);
        letters[str[i]] = charCount;
    }
}


console.log(letters)
