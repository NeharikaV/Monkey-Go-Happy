var banana, aniBanana, rock, aniRock, monkey, aniMonkey, aniBackground, backround, iniGround, score=0, bananaGroup, rockGroup;
  
  
function preload(){
  aniBanana=loadImage("banana.png");
  aniRock=loadImage("stone.png");
  aniMonkey=loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  aniBackground=loadImage("jungle.jpg");
  aniBanana=loadImage("banana.png");
  rock=loadImage("stone.png");
} 
  
  
  
  function setup() {
  createCanvas(400, 400);
  backround=createSprite(400,300);
  backround.addImage(aniBackground);
  backround.velocityX=-4;
  iniGround=createSprite(200,390,400,10);
  iniGround.visible=false;
  monkey=createSprite(30,370);
  monkey.addAnimation("mon",aniMonkey);
  monkey.scale=0.1
  bananaGroup=new Group(); 
  rockGroup=new Group();  
}

function draw() {
  background(220);
  
  if(backround.x<0){
    backround.x=backround.width/2;
    }
  
  if(rockGroup.isTouching(monkey)){
  monkey.scale=0.1;
   }
  
  monkey.collide(iniGround);
  
  
  
  monkey.velocityY=monkey.velocityY+0.5;
  
  //console.log(monkey.y);
  
  food();
  stone();
  
  if(bananaGroup.isTouching(monkey)){
    score=score+1;
    bananaGroup.destroyEach();
  }
  
  
    switch(score){
        case 1: monkey.scale=0.2
                break;
        case 20 :monkey.scale=0.3
                break;
        case 30 :monkey.scale=0.4
                break;
        case 40 :monkey.scale=0.5
                break;
        default : break;        
    }
  
  
  if(keyDown("space")){
    monkey.velocityY=-10;
    }
  
  
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score, 310,30);
  
  
}   

function food(){
  if(frameCount%100===0){
    banana=createSprite(400,200);
    banana.addImage(aniBanana);
    banana.scale=0.05;
    banana.velocityX=-5;
    bananaGroup.add(banana);
    banana.lifetime=5/450;
  }
}


  
  
function stone(){
  if(frameCount%200===0){
    rock=createSprite(400,380);
    rock.addImage(aniRock);
    rock.velocityX=-4;
    rock.scale=0.1;
    rockGroup.add(rock);
    rockGroup.lifetime=4/450;
  }
} 
  
  
  
  
  
  
  
  
  
  
  
  
