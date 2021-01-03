var fixedRect;
var movingRect;
var gameobj1;
var gameobj2;


function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400,200,50,50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(200,400,50,50);
  movingRect.shapeColor = "green";

  gameobj1 = createSprite(100,200,20,20);
  gameobj1.shapeColor = "cyan";
  gameobj2 = createSprite(200,200,20,20);
  gameobj2.shapeColor = "cyan";
}

function draw() {
  background(255,255,255);  

 
  movingRect.y = mouseY;
  movingRect.x = mouseX;
  console.log(movingRect.x);

  if(isTouching(movingRect,fixedRect)){

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}else {
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

if(isTouching(movingRect,gameobj2)){

  gameobj2.shapeColor = "red";
  movingRect.shapeColor = "red";
}else {
  gameobj2.shapeColor = "green";
  movingRect.shapeColor = "green";
}

drawSprites();
}

