var ground
var plane
var PLAY
var END
var gameState = PLAY


function preload(){
    backImage = loadImage("back.png");
    planImage = loadAnimation("plane.png")
    blastImage= loadAnimation("blast.jpg");
    meteorImage = loadAnimation("asteroid.jpg");
}











function setup(){

    createCanvas(400,500);
    background("red");


    ground = createSprite(200,180,400,20);
    ground.addImage("sky",backImage);
    ground.scale=0.88

    plane = createSprite(200,430)
    plane.addAnimation("plane",planImage)
    plane.addAnimation("blast",blastImage)
    plane.scale=0.05
    plane.x=World.mouseX
    obstaclesGroup= new Group()
}



function draw(){
    plane.debug=true
    if(gameState===PLAY){
        plane.x=World.mouseX
        spawnplanes()
       
    }
    if(obstaclesGroup.isTouching(plane)){
        plane.changeAnimation("blast",blastImage)
        
        ground.destroy()
        textSize(50)
        fill ("white")
        text("gameOver",50,200)
        obstacle.destroy()
        

        
    }
   
   

    
   
    

    
    drawSprites()
}

function spawnplanes(){
    if(frameCount % 30 === 0) {
        var obstacle = createSprite(50,200,10,40);
        obstacle.addAnimation("meteor",meteorImage)
        obstacle.scale=0.1
       // obstacle.debug = true;
        obstacle.velocityY = 6
        obstacle.x= Math.round(random(0,400))
        obstaclesGroup.add(obstacle)
        obstacle.debug=true
    }}
        
     
    
