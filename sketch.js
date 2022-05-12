var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("sea.png")
//Choose the correct option by uncommenting the right line to load the animation for ship.

var ship,ship_running;
var ground
function preload(){
 ship_running=loadAnimation ("ship1.png","ship2.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a ship sprite
  ship=createSprite(50,150,50,50)
 ship.addAnimation("running",ship_running)
 ground=createSprite(200,180,400,20)
}

function draw(){
  background("blue")
  if(keyDown("space")) {
    ship.velocityY = -10;
  }
  
  ship.velocityY = ship.velocityY + 0.8
 ship.collide(ground)
  drawSprites() 

}
  //shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  //shipImg1 = loadAnimation("ship-1","ship-1","ship-2","ship-1");
  //shipImg1 = loadAnimation("1.png","2.png","3.png","4.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",ship-1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  
//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
  //sea.velocityY = -3;
  //sea.x = -3;
  //sea.velocityX = -3;
  //sea.velocityX = 3;
  

  
    
  drawSprites();
}
