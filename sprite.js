let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth * 0.7;
canvas.height = window.innerHeight * 0.9;
let context = canvas.getContext("2d")


let roberto = new Image()
roberto.src = "assets/spritesheet.png"


let frameCounter = 0
let spriteWidth = 160
let spriteSizeHeight = 320
let spriteSizeWidth = 350
let gameFrame = 0;
let frameSpeed = 8;


function animate() {
    context.clearRect(0,0, canvas.width, canvas.height)

    //context.drawImage(roberto, 0 , 0, canvas.width, canvas.height)
    context.drawImage(roberto, frameCounter*spriteWidth, 0, spriteWidth, roberto.height, 0 , 0 , spriteSizeWidth, spriteSizeHeight)
                    // img source,  cropping             , placement,      size

    if (gameFrame % frameSpeed == 0) {
        frameCounter++

    if (frameCounter > 15) {
        frameCounter = 0
    }

    }

    gameFrame++
    requestAnimationFrame(animate)

}


animate()






