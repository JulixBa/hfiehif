var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg, ghostJumping;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadAnimation("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  ghostJumping = loadAnimation("ghost-jumping.png");

}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  G = createSprite(300,300);
  G.addAnimation("ghost", ghostImg);
  G.addAnimation("ghostJ", ghostJumping);
  G.scale = 0.3;

  doorsGroup = new Group();

}

function draw() {
  background(200);
  if (keyDown("d")){
     G.x = G.x + 3;
  }
  if (keyDown("a")){
    G.x = G.x - 3;
 }


  if(gameState == "play") {
    drawSprites();
    if(G.isTouching(doorsGroup)){
     gameState = "fim";
     
    }
    if(keyDown("space")){
      G.velocityY = -4;
      G.changeAnimation("ghostJ", ghostJumping);
  
    }
    Obstaculo();  
    if(G.velocityY > 0) {
       G.changeAnimation("ghost", ghostImg);
    }
   
  }
  else if(gameState == "fim") {
    textSize(20);
    text("Fim de jogo", 300, 300);
    

  }

 

  G.velocityY = G.velocityY + 0.5;
  if(tower.y > 400){
      tower.y = 300
    }
   
}

function Obstaculo() {
  
  if(frameCount % 100 == 0) {
    D = createSprite(Math.round(random(140,500)),-15);
   D.addImage("door", doorImg);
    D.scale = 0.4;
    D.velocityY = 3;
    D.lifetime = 750;
   doorsGroup.add(D);
   
  }
}
