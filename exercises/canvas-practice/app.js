

    let canvas = document.getElementById('myCanvas')
    let ctx = canvas.getContext('2d')

//===IMAGES=====================================    
    let backgroundReady = false
    let backgroundImg = new Image()
    backgroundImg.onload = function(){
        backgroundReady = true
    }
    backgroundImg.src = "media/background.jpeg"

    let catReady = false
    let catImg = new Image()
    catImg.onload = function(){
        catReady = true
    }
    catImg.src = "media/cat.png"

    let cigReady = false
    let cigImg = new Image()
    cigImg.onload = function(){
        cigReady = true
    }
    cigImg.src = "media/cigarette.png"


//===GAME OBJECTS===============================

    let cat = {
        speed: 256,
        x: canvas.width / 2,
        y: canvas.height / 2
    }

    console.log(canvas.width)
    console.log(canvas.height)

    // let cig = {
    //     x: 32 + (Math.random() * (canvas.width - 64)),
    //     y: 32 + (Math.random() * (canvas.width - 64))
    // }

    let cig = {
        x: Math.floor(Math.random() * (canvas.width -100)) + 100,
        y: Math.floor(Math.random() * (canvas.height -100)) + 100
    }

    let cigsCaught = 0;

//===PLAYER INPUT===============================

let keysDown = {}

addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true
}, false)

addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode]
}, false)

//===NEW GAME===================================

let reset = function(){
    cat.x = canvas.width / 2
    cat.y = canvas.height / 2
    cig.x = Math.floor(Math.random() * (canvas.width -100)) + 100
    cig.y = Math.floor(Math.random() * (canvas.height -100)) + 100
}

console.log(cat.x)
console.log(cat.y)
console.log(cig.x)
console.log(cig.y)

//===UPDATE OBJECTS=============================
// 37 = left
// 38 = up
// 39 = right
// 40 = down

    let update = function(modifier){
        if(37 in keysDown){
            cat.x -= cat.speed * modifier
        }
        if(38 in keysDown){
            cat.y -= cat.speed * modifier
        }
        if(39 in keysDown){
            cat.x += cat.speed * modifier
        }
        if(40 in keysDown){
            cat.y += cat.speed * modifier
        }

        if(	cat.x <= (cig.x + 32)
		&& cig.x <= (cat.x + 32)
		&& cat.y <= (cig.y + 32)
		&& cig.y <= (cat.y + 32)){
            cigsCaught++
            reset()
        }
    }

//===RENDER OBJECTS============================

    let render = function(){

        if(backgroundReady){
            ctx.drawImage(backgroundImg, 0, 0)
        }
        if(catReady){
            ctx.drawImage(catImg, cat.x, cat.y)
        }
        if(cigReady){
            ctx.drawImage(cigImg, cig.x, cig.y)
        }

        //SCORE
        
    }

//===GAME LOOP=================================

    let main = function(){
        let now = Date.now()
        let delta = now - then

        update(delta / 1000)
        render()

        then = now

        requestAnimationFrame(main)

        // Cross-browser support for requestAnimationFrame
        let w = window;
        requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
    
    }

    let then = Date.now()
    reset()
    main()






    
    // ctx.strokeStyle = 'pink'
    // ctx.strokeRect(10, 50, 100, 200 )

    // array=[50, 20, 100, 75, 60, 10]
    // xAxis = 50
    // yAxis = 50
    // width = 50



    // for(let i = 0; i < array.length; i++){
    //     ctx.fillStyle = 'pink'
    //     ctx.fillRect(xAxis, canvas.height - array[i], width, array[i])
    //     ctxfillStyle = 'blue'
    //     ctx.arc(xAxis, canvas.height - array[i], )
    //     ctx.fill()

    //     xAxis += width + 10
    // }

    // ctxfillStyle = 'lightblue'
    // ctx.arc(100, 100, 30, 0, 2 * Math.PI, false) 
    // ctx.fill()


// debug: devtools ---> scripts 
// idea: chart for user averages
// TRANSFORMS 
// rotate(1 * Math.PI) ---> 180 degrees so it looks like it's rendering from bottom instead of top
// ---> will render from right to left
// ctx.translate(375, 200) ---> 

// ctx.beginPath() ---- code lines-----ctx.fill() will fill all of those in between
// closepath()
// line-width
// lineJoin = 'miter' is default
// miterLimit controls angle of line ends
// lineCap ---> defaults to 'butt' // can do: round, square
// instead: ctx.closePath() ---> fills in gaps
// SAVE and RESTORE --- to apply code to certain elements and then go back to default afterwards
// DRAWING IMAGES -- troubleshooting with remote and local images
