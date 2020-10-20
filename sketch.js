var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , running_mokey,monkeyImage;
var ground,invisible,groundImage;

var bananaGroup, bananaImage;
var obstaclesGroup

var score=0;

var gameOver, restart;


localStorage["HighestScore"] = 0;

function preload(){
 running_monkey = 
  loadImage("monkey_01.png,monkey_02.png,monkey_03.png,monkey_04.png,monkey_05.png,monkey_06.png,");
 
 groundImage = loadImage("jungle.jpg");
  
  cloudImage = loadImage("banana.png");
  
  obstacle1 = loadImage("stone.png");
  
  
}




function setup() {
  createCanvas(400, 400);
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  monkey = createSprite(50,180,20,50);
   monkey.addAnimation("running", running_monkey);
  
}

function draw() {
  background(220);
  text("Score: "+ score, 500,50);
  
   
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
  }
  
  if(keyDown("space") &&  monkey.y >= 159) {
      monkey.velocityY = -12;
    }
    monkey.velocityY =  monkey.velocityY + 0.8
  
  if (obstacleGroup.isTouching(monkey)){
     ground.velocityX = 0;
    }
  
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  spawnClouds();
    spawnObstacles();
  drawsprite();
  
  
}

function spawnobstacle() {
  
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }

  
}








function spawnbanana() {
  if(frameCount % 60 === 0) {
    var banana = createSprite(600,165,10,40);
    //obstacle.debug = true;
    
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(score) {
      case 10: monkey.scale = 0.12;
              break;
      case 20: monkey.scale = 0.14;
              break;
      case 30:  monkey.scale = 0.16;
              break;
      case 40:  monkey.scale = 0.18;
              break;
     
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}









