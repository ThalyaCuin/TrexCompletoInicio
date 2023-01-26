var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,cloudsGroup,cloudImage;


function preload(){
  trex_running = loadAnimation ("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");

  cloudImage = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200);

  // criar um sprite trex

trex = createSprite(50,180,20,50);
trex.addAnimation("running",trex_running);

//adicionar dimensão a posição trex

trex.scale = 0.5;
trex.x= 50;

//criar um sprite (solo)

ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width/2;

// criar um solo invisivel 

invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible = false;

}

function draw(){
  background(220);

  ground.velocityX= -2;

  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  // pular quando a tecla espaço for pressionada 

if (keyDown("space") && trex.y >=100){   
  trex.velocityY= -10;
}


trex.velocityY = trex.velocityY + 0.8;

//impedir que o meu trex caia 
trex.collide(invisibleGround);

spawClouds();

drawSprites();

}

function spawClouds(){

  if(frameCount % 60 === 0){
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage);
    cloud.y = Math.round(random(10,60));
    cloud.scale= 0.4;
    cloud.velocityX= -3;
  }

 
}