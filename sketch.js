
function preload() {
    tom1Img = loadAnimation("images/cat1.png")
    tom2Img = loadAnimation("images/cat2.png","images/cat3.png")
    tom3Img = loadAnimation("images/cat4.png")
    mouse1Img = loadAnimation("images/mouse1.png")
    mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse4Img = loadAnimation("images/mouse1.png")
    bg = loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(870,600)
    tom.addAnimation("tom1",tom1Img)
    tom.scale = 0.2
    tom.debug = true

    mouse = createSprite(200,600)
    mouse.addAnimation("mouse1",mouse1Img)
    mouse.scale = 0.2
    mouse.debug = true
    
    

    
    //create tom and jerry sprites here

}

function draw() {

    background(bg); 

    if(tom.x - mouse.x < tom.width/2 - mouse.width/2){
        tom.velocityX = 0
        tom.x = 300
        tom.addAnimation("tom3",tom3Img)
        tom.changeAnimation("tom3")

        mouse.addAnimation("mouse4",mouse4Img)
        mouse.changeAnimation("mouse4")

    }

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
    if (keyCode === LEFT_ARROW){
        tom.velocityX = -3
        tom.addAnimation("tom2",tom2Img)
        tom.changeAnimation("tom2")

        mouse.addAnimation("mouse2",mouse2Img)
        mouse.changeAnimation("mouse2")
    }

  //For moving and changing animation write code here


}
