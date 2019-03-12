
let readline = require("readline-sync");

let enemyHealth = 100;
let playerHealth = 100;
let attackAndRunCounter = 0;

printInventory = () => {
    let print = readline.question(" Type \"print\" and press Enter to see your items.")
    if(print == "print" || print == "Print"){
        console.log("Inventory: bowstaff")
        keepWalking();
    }
    else
        keepWalking();
}

playerDead = () => {
    console.log("You've died. Try playing again!")
    process.exit();
}

enemyDead = () => {
    console.log("You've defeated your foe! You've earned +10HP and an item in your inventory!")
    printInventory();
    keepWalking();
}

youWin = () => {
    console.log("You made it to the promised land! Good job! Try playing again.")
    process.exit();
}


keepWalking = () => {
    let wKey = readline.question( "Press \'w\' + Enter to begin walking. Every time you press \'w\' you will walk five steps.");
    if(wKey == 'w')
        console.log(randomAttack());
    else{
        console.log("Please press \'w\'");
        keepWalking();
    }
}

randomAttack = () => {
    let number = Math.floor((Math.random() * 11) / 3);
    switch(number){
        case 0: 
                console.log("A wild enemy has appeared!")
                chooseAttackRun();
        case 1:
            console.log("So far, so good. Keep walking.")
            keepWalking();
        case 2:
            console.log("Keep walking.")
            keepWalking();
        case 3:
            console.log("Still a long ways to go...keep walking.")
            keepWalking();
    }
}

attackPower = () => {
    let damage = Math.floor(Math.random() * 101);
    return damage;
}

checkPlayerDead = (playerHealth) => {
    if(playerHealth <= 0)
        playerDead();
    else    
        return playerHealth;
}

checkEnemyDead = (enemyHealth) => {
    if(enemyHealth <= 0)
        enemyDead();
    else
        return enemyHealth;
}

attackOnPlayer = (playerHealth) => {
    let playerDamage = attackPower();
    let newPlayerHealth = playerHealth - playerDamage;
    console.log(`Your enemy attacks you, leaving you with ${playerDamage}% damage.
    Your new health is ${newPlayerHealth}`);      
    checkPlayerDead(newPlayerHealth);
    // playerHealthThreshold(enemyAttackDamage, playerHealth);
    // playerHealth = calculatePlayerHealth(enemyAttackDamage, playerHealth);
    return newPlayerHealth;
}

attackOnEnemy = (enemyHealth) => {
    let enemyDamage = attackPower();
    let newEnemyHealth = enemyHealth - enemyDamage;
    console.log(`You fight back! Your strikes result in ${enemyDamage}% damage to your enemy.
    Your enemy's new health is ${newEnemyHealth}`);
    checkEnemyDead(newEnemyHealth);       
    // enemyHealthThreshold(attackOnEnemyDamage, enemyHealth);
    // enemyHealth = calculateEnemyHealth(attackOnEnemyDamage, enemyHealth);                         /* this runs the function */
    return newEnemyHealth;
}

runForIt = () => {
    attackAndRunCounter++;
    if(attackAndRunCounter < 5){
        let chanceOfEscape = Math.floor(Math.random() * 2) + 1;    /* wish I understood this */
        if(chanceOfEscape == 1){
            console.log("They caught up! You're under attack!")
            chooseAttackRun();
        }
        else
            console.log("Whew! You got away! Now keep going!")
            keepWalking();
    }
    else
        youWin();
}

chooseAttackRun = () => {
        let attackOrRun = ["attack", "run"];
        let choice = readline.keyInSelect(attackOrRun, "Will you attack or run? Enter the number of the option you choose: ")
        if(choice == 0){
            attackAndRunCounter++;
            if(attackAndRunCounter < 5){
                enemyHealth = attackOnEnemy(enemyHealth);
                playerHealth = attackOnPlayer(playerHealth);
                keepWalking();
            }
            else
                console.log("Your foe has taken their final blow.")
                youWin();
        }
        else if(choice == 1){
            console.clear();
            runForIt();
        }
        else{
            console.clear();
            console.log("Choose to attack or run");
            chooseAttackRun();
        }
}

let playerName = readline.question("Welcome to the worst RPG ever! What's your name? ")
console.clear();

console.log("Nice to meet you, " + playerName + " !");

keepWalking();
