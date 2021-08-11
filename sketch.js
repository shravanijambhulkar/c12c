var path,pathImg,coin,runner_running,runnerImg,coinImg;
function preload(){
 
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");
  coinImg=loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
   Runner.x=World.mouseX;
  path.y=path.height/30;
  runner=createSprite(180,340,50,170);
  runner.addAnimation(runnerImg);
  coin1=createSprite(200,200,80,90);
  coin1.addImage(coinImg);
  coin2.scale=0.3
  coin2=createSprite(100,200,80,90);
  coin3.addImage(coinImg);
  coin3.scale=0.3
  coin4=createSprite(300,100,50,50);
  coin4.scale=0.3;
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  background(0);
  textSize(10);
  text('coin Score', 1,200);
  var score = 07;
  if(path.y>400) {
  path.y=height/2 ;
  if(Runner.isTouching(coin)) {
  coinscore = coinscore+1;
 }
  
}
  Runner.collide(left_boundary);
  Runner.collide(right_boundary);
  edges=createEdgeSprites();
drawSprite();
}
score = score+1;
