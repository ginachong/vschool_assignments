

//when beer/cig collide with walls, change x or y according to which wall.
//y changes when there's a collision with top/bottom
//x -- left and right walls


    let canvas = document.getElementById('myCanvas')
    let ctx = canvas.getContext('2d')

//===IMAGES=====================================    
    let backgroundReady = false
    let backgroundImg = new Image()
    backgroundImg.onload = function(){
        backgroundReady = true
    }
    backgroundImg.src = "media/pinkgradient.png"

    let figureReady = false
    let figureImg = new Image()
    figureImg.onload = function(){
        figureReady = true
    }
    figureImg.src = "media/figure.png"

    let saladReady = false
    let saladImg = new Image()
    saladImg.onload = function(){
        saladReady = true
    }
    saladImg.src = "media/salad.png"

    let beerReady = false
    let beerImg = new Image()
    beerImg.onload = function(){
        beerReady = true
    }
    beerImg.src = "media/beer.png"

    let cigReady = false
    let cigImg = new Image()
    cigImg.onload = function(){
        cigReady = true
    }
    cigImg.src = "media/cigarette.png"


//===GAME OBJECTS===============================

    let figure = {
        speed: 306,
        x: 185,
        y: 185
    }

    let salad = {
        x: Math.floor(Math.random() * (360 - 40)) + 40,
        y: Math.floor(Math.random() * (360 - 40)) + 40
    }

    let beer = {
        speed: 1,
        angle: Math.floor(Math.random() * 90),
        bounce: 1,
        x: Math.floor(Math.random() * (360 - 40)) + 40,
        y: Math.floor(Math.random() * (360 - 40)) + 40
    }

    let beer2 = {
        speed: 1,
        angle: Math.floor(Math.random() * 90),
        bounce: 1,
        x: Math.floor(Math.random() * (360 - 40)) + 40,
        y: Math.floor(Math.random() * (360 - 40)) + 40
    }

    let beer3 = {
        speed: 1,
        angle: Math.floor(Math.random() * 90),
        bounce: 1,
        x: Math.floor(Math.random() * (360 - 40)) + 40,
        y: Math.floor(Math.random() * (360 - 40)) + 40
    }

    let cig = {
        speed: 1,
        angle: Math.floor(Math.random() * 90),
        bounce: 1,
        x: Math.floor(Math.random() * (360 - 40)) + 40,
        y: Math.floor(Math.random() * (360 - 40)) + 40
    }

    let cig2 = {
        speed: 1,
        angle: Math.floor(Math.random() * 90),
        bounce: 1,
        x: Math.floor(Math.random() * (360 - 40)) + 40,
        y: Math.floor(Math.random() * (360 - 40)) + 40
    }

    let cig3 = {
        speed: 1,
        angle: Math.floor(Math.random() * 90),
        bounce: 1,
        x: Math.floor(Math.random() * (360 - 40)) + 40,
        y: Math.floor(Math.random() * (360 - 40)) + 40
    }

    let wins = 0;
    let losses = 0;

//===PLAYER INPUT===============================

let keysDown = {}

addEventListener('keydown', function(e) {
    keysDown = {[e.keyCode]: true}
})

addEventListener('keyup', function() {
    keysDown = {}
})

//===RESET====================================

let reset = function(){
    figure.x = 185
    figure.y = 185
    salad.x = Math.floor(Math.random() * (360 - 40)) + 40
    salad.y = Math.floor(Math.random() * (360 - 40)) + 40
    beer.x = Math.floor(Math.random() * (360 - 40)) + 40
    beer2.x = Math.floor(Math.random() * (360 - 40)) + 40
    beer3.x = Math.floor(Math.random() * (360 - 40)) + 40
    beer.y = Math.floor(Math.random() * (360 - 40)) + 40 
    beer2.y = Math.floor(Math.random() * (360 - 40)) + 40 
    beer3.y = Math.floor(Math.random() * (360 - 40)) + 40 
    beer.angle = Math.floor(Math.random() * 90)
    beer2.angle = Math.floor(Math.random() * 90)
    beer3.angle = Math.floor(Math.random() * 90)
    cig.x = Math.floor(Math.random() * (360 - 40)) + 40
    cig2.x = Math.floor(Math.random() * (360 - 40)) + 40
    cig3.x = Math.floor(Math.random() * (360 - 40)) + 40 
    cig.y = Math.floor(Math.random() * (360 - 40)) + 40
    cig2.y = Math.floor(Math.random() * (360 - 40)) + 40
    cig3.y = Math.floor(Math.random() * (360 - 40)) + 40 
    cig.angle = Math.floor(Math.random() * 90)
    cig2.angle = Math.floor(Math.random() * 90)
    cig3.angle = Math.floor(Math.random() * 90)
    // backgroundReady, figureReady, saladReady, beerReady, cigReady = false
}

// console.log(figure.x)
// console.log(figure.y)
// console.log(salad.x)
// console.log(salad.y)

//===UPDATE OBJECTS=============================
// 37 = left
// 38 = up
// 39 = right
// 40 = down

    let update = function(modifier){
        if(37 in keysDown){
            figure.x -= figure.speed * modifier
        }
        if(38 in keysDown){
            figure.y -= figure.speed * modifier
        }
        if(39 in keysDown){
            figure.x += figure.speed * modifier
        }
        if(40 in keysDown){
            figure.y += figure.speed * modifier
        }

        if(	figure.x <= (salad.x + 30)
		&& salad.x <= (figure.x + 30)
		&& figure.y <= (salad.y + 30)
		&& salad.y <= (figure.y + 30)){
            wins++
            reset()
        } 

        // if(	figure.x <= (beer.x + 20)
		// && figure.x >= (beer.x)
		// || figure.y <= (beer.y + 20)
		// && figure.y >= (beer.y + 20)){
        //     losses++
        //     alert("You've Lost! Press 'Okay' to play again.")
        //     reset()
        // } 

        if(	figure.x <= (beer.x + 20)
		&& beer.x <= (figure.x + 20)
		&& figure.y <= (beer.y + 20)
		&& beer.y <= (figure.y + 20)){
            losses++
            console.log("beer is the culprit")
            alert("You've Lost! Press 'Okay' to play again.")
            reset()
        } 

        // if(	figure.x <= (cig.x + 20)
		// && figure.x >= (cig.x)
		// || figure.y <= (cig.y + 20)
		// && figure.y >= (cig.y + 20)){
        //     losses++
        //     alert("You've Lost! Press 'Okay' to play again.")
        //     reset()
        // } 

        if(	figure.x <= (cig.x + 20)
		&& cig.x <= (figure.x + 20)
		&& figure.y <= (cig.y + 20)
		&& cig.y <= (figure.y + 20)){
            losses++
            console.log("cig is the culprit")
            console.log(cig.x)
            console.log(cig.y)
            console.log(figure.x)
            console.log(figure.y)
            alert("You've Lost! Press 'Okay' to play again.")
            reset()
        } 

        beer.x += beer.speed * Math.sin(beer.angle)
        beer.y += beer.speed * Math.cos(beer.angle)
        cig.x += cig.speed * Math.sin(cig.angle)
        cig.y += cig.speed * Math.cos(cig.angle)

        // can change speed to make them go faster at higher levels

        if(beer.x >= 370 || beer.x <= 10 || beer.y >= 370 || beer.y <= 15 ){
            beer.speed = -(beer.speed * beer.bounce)
            // beer.angle = -beer.angle
        }
        if(cig.x >= 370 || cig.x <= 10 || cig.y >= 370 || cig.y <= 15 ){
            cig.speed = -(cig.speed * cig.bounce)
            // cig.angle = -cig.angle
        }

        // if(wins > 5){
        //     beer.speed = 2
        //     cig.speed = 2
        // }
        // else if (wins > 10){
        //     beer.speed = 3
        //     cig.speed = 3
        // }
        // else if (wins > 15){
        //     beer.speed = 4
        //     cig.speed = 4
        // }

        document.getElementById('wins').innerHTML = `Wins: ${wins}`
        document.getElementById('losses').innerHTML = `Losses: ${losses}`
    }

    let update5 = function(modifier){
        if(37 in keysDown){
            figure.x -= figure.speed * modifier
        }
        if(38 in keysDown){
            figure.y -= figure.speed * modifier
        }
        if(39 in keysDown){
            figure.x += figure.speed * modifier
        }
        if(40 in keysDown){
            figure.y += figure.speed * modifier
        }

        if(	figure.x <= (salad.x + 30)
		&& salad.x <= (figure.x + 30)
		&& figure.y <= (salad.y + 30)
		&& salad.y <= (figure.y + 30)){
            wins++
            reset()
        } 

        if(	figure.x <= (beer.x + 20)
		&& beer.x <= (figure.x + 20)
		&& figure.y <= (beer.y + 20)
		&& beer.y <= (figure.y + 20)){
            losses++
            console.log("beer is the culprit")
            alert("You've Lost! Press 'Okay' to play again.")
            reset()
        } 

        if(	figure.x <= (beer2.x + 20)
		&& beer2.x <= (figure.x + 20)
		&& figure.y <= (beer2.y + 20)
		&& beer2.y <= (figure.y + 20)){
            losses++
            console.log("beer2 is the culprit")
            alert("You've Lost! Press 'Okay' to play again.")
            reset()
        }

        if(	figure.x <= (cig.x + 20)
		&& cig.x <= (figure.x + 20)
		&& figure.y <= (cig.y + 20)
		&& cig.y <= (figure.y + 20)){
            losses++
            console.log("cig is the culprit")
            alert("You've Lost! Press 'Okay' to play again.")
            reset()
        } 

        beer.x += beer.speed * Math.sin(beer.angle)
        beer.y += beer.speed * Math.cos(beer.angle)
        cig.x += cig.speed * Math.sin(cig.angle)
        cig.y += cig.speed * Math.cos(cig.angle)

        beer2.x += beer2.speed * Math.sin(beer2.angle)
        beer2.y += beer2.speed * Math.cos(beer2.angle)

        if(beer.x >= 370 || beer.x <= 10 || beer.y >= 370 || beer.y <= 15 ){
            beer.speed = -(beer.speed * beer.bounce)
            // beer.angle = -beer.angle
        }
        if(cig.x >= 370 || cig.x <= 10 || cig.y >= 370 || cig.y <= 15 ){
            cig.speed = -(cig.speed * cig.bounce)
            // cig.angle = -cig.angle
        }

        if(beer2.x >= 370 || beer2.x <= 10 || beer2.y >= 370 || beer2.y <= 15 ){
            beer2.speed = -(beer2.speed * beer2.bounce)
        }

        document.getElementById('wins').innerHTML = `Wins: ${wins}`
        document.getElementById('losses').innerHTML = `Losses: ${losses}`
    }

    let update10 = function(modifier){
        if(37 in keysDown){
            figure.x -= figure.speed * modifier
        }
        if(38 in keysDown){
            figure.y -= figure.speed * modifier
        }
        if(39 in keysDown){
            figure.x += figure.speed * modifier
        }
        if(40 in keysDown){
            figure.y += figure.speed * modifier
        }

        if(	figure.x <= (salad.x + 30)
		&& salad.x <= (figure.x + 30)
		&& figure.y <= (salad.y + 30)
		&& salad.y <= (figure.y + 30)){
            wins++
            reset()
        } 

        if(	figure.x <= (beer.x + 20)
		&& beer.x <= (figure.x + 20)
		&& figure.y <= (beer.y + 20)
		&& beer.y <= (figure.y + 20)){
            losses++
            console.log("beer is the culprit")
            alert("You've Lost! Press 'Okay' to play again.")
            reset()
        } 

        if(	figure.x <= (beer2.x + 20)
		&& beer2.x <= (figure.x + 20)
		&& figure.y <= (beer2.y + 20)
		&& beer2.y <= (figure.y + 20)){
            losses++
            console.log("beer2 is the culprit")
            alert("You've Lost! Press 'Okay' to play again.")
            reset()
        } 

        if(	figure.x <= (cig.x + 20)
		&& cig.x <= (figure.x + 20)
		&& figure.y <= (cig.y + 20)
		&& cig.y <= (figure.y + 20)){
            losses++
            console.log("cig is the culprit")
            alert("You've Lost! Press 'Okay' to play again.")
            reset()
        } 

        if(	figure.x <= (cig2.x + 20)
		&& cig2.x <= (figure.x + 20)
		&& figure.y <= (cig2.y + 20)
		&& cig2.y <= (figure.y + 20)){
            losses++
            console.log("cig2 is the culprit")
            alert("You've Lost! Press 'Okay' to play again.")
            reset()
        } 

        beer.x += beer.speed * Math.sin(beer.angle)
        beer.y += beer.speed * Math.cos(beer.angle)
        cig.x += cig.speed * Math.sin(cig.angle)
        cig.y += cig.speed * Math.cos(cig.angle)

        beer2.x += beer2.speed * Math.sin(beer2.angle)
        beer2.y += beer2.speed * Math.cos(beer2.angle)
        cig2.x += cig2.speed * Math.sin(cig2.angle)
        cig2.y += cig2.speed * Math.cos(cig2.angle)

        if(beer.x >= 370 || beer.x <= 10 || beer.y >= 370 || beer.y <= 15 ){
            beer.speed = -(beer.speed * beer.bounce)
            // beer.angle = -beer.angle
        }
        if(cig.x >= 370 || cig.x <= 10 || cig.y >= 370 || cig.y <= 15 ){
            cig.speed = -(cig.speed * cig.bounce)
            // cig.angle = -cig.angle
        }

        if(beer2.x >= 370 || beer2.x <= 10 || beer2.y >= 370 || beer2.y <= 15 ){
            beer2.speed = -(beer2.speed * beer2.bounce)
        }
        if(cig2.x >= 370 || cig2.x <= 10 || cig2.y >= 370 || cig2.y <= 15 ){
            cig2.speed = -(cig2.speed * cig2.bounce)
        }

        document.getElementById('wins').innerHTML = `Wins: ${wins}`
        document.getElementById('losses').innerHTML = `Losses: ${losses}`
    }

    let update15 = function(modifier){
        if(37 in keysDown){
            figure.x -= figure.speed * modifier
        }
        if(38 in keysDown){
            figure.y -= figure.speed * modifier
        }
        if(39 in keysDown){
            figure.x += figure.speed * modifier
        }
        if(40 in keysDown){
            figure.y += figure.speed * modifier
        }

        if(	figure.x <= (salad.x + 30)
		&& salad.x <= (figure.x + 30)
		&& figure.y <= (salad.y + 30)
        && salad.y <= (figure.y + 30)
        ){
            wins++
            reset()
        } 

        if(	figure.x <= (beer.x + 20)
		&& beer.x <= (figure.x + 20)
		&& figure.y <= (beer.y + 20)
        && beer.y <= (figure.y + 20)
        ){
            losses++
            console.log("beer is the culprit")
            alert("You've Lost! Press 'Okay' to play again.")
            reset()
        } 

        if(	figure.x <= (beer2.x + 20)
		&& beer2.x <= (figure.x + 20)
		&& figure.y <= (beer2.y + 20)
		&& beer2.y <= (figure.y + 20)){
            losses++
            console.log("beer2 is the culprit")
            alert("You've Lost! Press 'Okay' to play again.")
            reset()
        } 

        if(	figure.x <= (beer3.x + 20)
		&& beer3.x <= (figure.x + 20)
		&& figure.y <= (beer3.y + 20)
		&& beer3.y <= (figure.y + 20)){
            losses++
            console.log("beer3 is the culprit")
            alert("You've Lost! Press 'Okay' to play again.")
            reset()
        } 

        if(	figure.x <= (cig.x + 20)
		&& cig.x <= (figure.x + 20)
		&& figure.y <= (cig.y + 20)
		&& cig.y <= (figure.y + 20)){
            losses++
            console.log("cig is the culprit")
            alert("You've Lost! Press 'Okay' to play again.")
            reset()
        } 

        if(	figure.x <= (cig2.x + 20)
		&& cig2.x <= (figure.x + 20)
		&& figure.y <= (cig2.y + 20)
		&& cig2.y <= (figure.y + 20)){
            losses++
            console.log("cig2 is the culprit")
            alert("You've Lost! Press 'Okay' to play again.")
            reset()
        } 
        if(	figure.x <= (cig3.x + 20)
		&& cig3.x <= (figure.x + 20)
		&& figure.y <= (cig3.y + 20)
		&& cig3.y <= (figure.y + 20)){
            losses++
            console.log("cig3 is the culprit")
            alert("You've Lost! Press 'Okay' to play again.")
            reset()
        } 

        beer.x += beer.speed * Math.sin(beer.angle)
        beer.y += beer.speed * Math.cos(beer.angle)
        cig.x += cig.speed * Math.sin(cig.angle)
        cig.y += cig.speed * Math.cos(cig.angle)

        beer2.x += beer2.speed * Math.sin(beer2.angle)
        beer2.y += beer2.speed * Math.cos(beer2.angle)
        cig2.x += cig2.speed * Math.sin(cig2.angle)
        cig2.y += cig2.speed * Math.cos(cig2.angle)

        beer3.x += beer3.speed * Math.sin(beer3.angle)
        beer3.y += beer3.speed * Math.cos(beer3.angle)
        cig3.x += cig3.speed * Math.sin(cig3.angle)
        cig3.y += cig3.speed * Math.cos(cig3.angle)

        if(beer.x >= 370 || beer.x <= 10 || beer.y >= 370 || beer.y <= 15 ){
            beer.speed = -(beer.speed * beer.bounce)
        }
        if(cig.x >= 370 || cig.x <= 10 || cig.y >= 370 || cig.y <= 15 ){
            cig.speed = -(cig.speed * cig.bounce)
        }

        if(beer2.x >= 370 || beer2.x <= 10 || beer2.y >= 370 || beer2.y <= 15 ){
            beer2.speed = -(beer2.speed * beer2.bounce)
        }
        if(cig2.x >= 370 || cig2.x <= 10 || cig2.y >= 370 || cig2.y <= 15 ){
            cig2.speed = -(cig2.speed * cig2.bounce)
        }

        if(beer3.x >= 370 || beer3.x <= 10 || beer3.y >= 370 || beer3.y <= 15 ){
            beer3.speed = -(beer3.speed * beer3.bounce)
        }
        if(cig3.x >= 370 || cig3.x <= 10 || cig3.y >= 370 || cig3.y <= 15 ){
            cig3.speed = -(cig3.speed * cig3.bounce)
        }

        document.getElementById('wins').innerHTML = `Wins: ${wins}`
        document.getElementById('losses').innerHTML = `Losses: ${losses}`
    }


//===RENDER OBJECTS============================

    let render = function(){

        if(backgroundReady === true){
            ctx.drawImage(backgroundImg, 0, 0)
        }
        if(figureReady === true && backgroundReady === true){
            console.log(`figureReady is ${figureReady}`)
            ctx.drawImage(figureImg, figure.x, figure.y)
        }
        if(saladReady === true && figureReady === true){
            ctx.drawImage(saladImg, salad.x, salad.y)
        }
        if(beerReady === true && figureReady === true){
            ctx.drawImage(beerImg, beer.x, beer.y)
        }
        if(cigReady === true && figureReady === true){
            ctx.drawImage(cigImg, cig.x, cig.y)
        }    
        // backgroundReady, figureReady, saladReady, beerReady, cigReady = false
    }

    let render5 = function(){

        if(backgroundReady === true){
            ctx.drawImage(backgroundImg, 0, 0)
        }
        if(figureReady === true && backgroundReady === true){
            ctx.drawImage(figureImg, figure.x, figure.y)
        }
        if(saladReady === true && figureReady === true){
            ctx.drawImage(saladImg, salad.x, salad.y)
        }
        if(beerReady === true && figureReady === true){
            ctx.drawImage(beerImg, beer.x, beer.y)
        }
        if(beerReady === true && figureReady === true){
            ctx.drawImage(beerImg, beer2.x, beer2.y)
        }
        if(cigReady === true && figureReady === true){
            ctx.drawImage(cigImg, cig.x, cig.y)
        }    
        // backgroundReady, figureReady, saladReady, beerReady, cigReady = false
    }

    let render10 = function(){

        if(backgroundReady === true){
            ctx.drawImage(backgroundImg, 0, 0)
        }
        if(figureReady === true && backgroundReady === true){
            ctx.drawImage(figureImg, figure.x, figure.y)
        }
        if(saladReady === true && figureReady === true){
            ctx.drawImage(saladImg, salad.x, salad.y)
        }
        if(beerReady === true && figureReady === true){
            ctx.drawImage(beerImg, beer.x, beer.y)
        }
        if(cigReady === true && figureReady === true){
            ctx.drawImage(cigImg, cig.x, cig.y)
        }  
        if(beerReady === true && figureReady === true){
            ctx.drawImage(beerImg, beer2.x, beer2.y)
        }
        if(cigReady === true && figureReady === true){
            ctx.drawImage(cigImg, cig2.x, cig2.y)
        }      
        // backgroundReady, figureReady, saladReady, beerReady, cigReady = false
    }

    let render15 = function(){

        if(backgroundReady){
            ctx.drawImage(backgroundImg, 0, 0)
        }
        if(figureReady){
            ctx.drawImage(figureImg, figure.x, figure.y)
        }
        if(saladReady){
            ctx.drawImage(saladImg, salad.x, salad.y)
        }
        if(beerReady){
            ctx.drawImage(beerImg, beer.x, beer.y)
        }
        if(cig){
            ctx.drawImage(cigImg, cig.x, cig.y)
        }    
        if(beerReady){
            ctx.drawImage(beerImg, beer2.x, beer2.y)
        }
        if(cig){
            ctx.drawImage(cigImg, cig2.x, cig2.y)
        }  
        if(beerReady){
            ctx.drawImage(beerImg, beer3.x, beer3.y)
        }
        if(cig){
            ctx.drawImage(cigImg, cig3.x, cig3.y)
        }  
        // backgroundReady, figureReady, saladReady, beerReady, cigReady = false
    }

//===GAME LOOP=================================

    let gameLoop = function(){
        let now = Date.now()
        let difference = now - then

        if(wins >= 15 ){
            update15(difference / 1000)
            render15()
        }
        else if(wins >= 10 ){
            update10(difference / 1000)
            render10()
        }
        else if(wins >= 5 ){
            update5(difference / 1000)
            render5()
        }
        else{
            update(difference / 1000)
            render()
        }


        then = now

        requestAnimationFrame(gameLoop)

        // Cross-browser support for requestAnimationFrame
        let w = window;
        requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
    
    }

    let then = Date.now()
    reset()
    gameLoop()


    // let showWins = document.createTextNode(`Wins: ${wins}`)
    // showWins.className = 'win'
    // document.body.appendChild(showWins)
    // let showLosses = document.createTextNode(`Losses: ${losses}`)
    // document.body.appendChild(showLosses)

    
    //Add logic so that they can't leave the canvas