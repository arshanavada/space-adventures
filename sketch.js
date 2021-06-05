var player,playerKnifeImg,bgImg;

function preload() {
  bgImg=loadImage("Images/other-assets/floor.jpg");
  playerKnifeImg=loadImage("Images/player/player-knife.png");
}

function setup() {
  createCanvas(1300,600);
  console.log(width,height);
  
  player=createSprite(1290,550,60,50);
  player.addImage(playerKnifeImg,"plr");
  player.scale=0.3;
 
  level1();
}

function draw() {
  background(0);  
  createEdgeSprites();

  player.velocityX=0;
  player.velocityY=0;

  //player.bounceOff(wall1);
  //player.bounceOff(Edges);
  if(keyDown("RIGHT_ARROW")){
    player.velocityX+=8;
  }
  if(keyDown("LEFT_ARROW")){
    player.velocityX-=8;
  }
  if(keyDown("UP_ARROW")){
    player.velocityY-=8;
  }
  if(keyDown("DOWN_ARROW")){
    player.velocityY+=8;
  }

 
  drawSprites();
}

function level1(){
  var wall1=createSprite(150,90,10,400);
  var wall2=createSprite(10,350,500,10);
  var wall3=createSprite(400,350,200,10);
  var wall4=createSprite(120,500,10,200);
  var wall5=createSprite(400,350,200,10);
  var wall6=createSprite(420,570,600,10);
  var wall7=createSprite(500,500,600,10);
  var wall8=createSprite(350,90,10,400);
  var wall9=createSprite(500,90,10,400);
  var wall10=createSprite(900,90,10,400);
  var wall11=createSprite(1000,290,400,10);
  
}

//createEdgeSprites();