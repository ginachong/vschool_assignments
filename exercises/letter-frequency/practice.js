

for(var i = 0; i < str.length; i++){
    for(var x = i+1; x < str.length; x++){
        if(str[i] === str[x]){
            finalArray.splice(x, 1);
        }
    }
}