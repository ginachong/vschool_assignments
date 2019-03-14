// itemGenerator = () => {
//     let itemNumber = Math.floor(Math.random() * 5);
//     let item = "";
//     switch(itemNumber){
//         case 0: return item + "pistol";
//         case 1: return item + "magic potion";
//         case 2: return item + "energy drink";
//         case 3: return item + "bow and arrow";
//         case 4: return item + "daggar";
//     }
//     return item;
// }
// console.log(itemGenerator())

// let readline = require('readline-sync');

// printInventory = () => {
//     let print = readline.question("Type \"print\" and press Enter to see your items. ")
//     if(print == "print" || print == "Print"){
//         if(inventoryList.length !== 0)
//             console.log(inventoryList)
//         else{
//             console.log(`
            
//             Your inventory is empty. You need to defeat enemies in order to attain items.
//             `)
//     }
// }
// }

// console.log(printInventory())

let inventoryList = [];

// console.log(typeof inventoryList)

itemGenerator = () => {
    let itemNumber = Math.floor(Math.random() * 5);
    let item = "";
    switch(itemNumber){
        case 0: item = "pistol"; 
        break;
        case 1: item = "magic potion"; 
        break;
        case 2: item = "energy drink"; 
        break;
        case 3: item = "bow and arrow"; 
        break;
        case 4: item = "daggar";
    }
    inventoryList.push(item);
    return inventoryList;
}

console.log(itemGenerator())