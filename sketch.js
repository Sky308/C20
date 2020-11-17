var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 75, 25);
  movingRect = createSprite(400,300,25,75);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  movingRect.debug=true;
  fixedRect.debug=true;
}

function draw() {
  background(0);

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 && fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2 && movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){
   fixedRect.shapeColor="red";
   movingRect.shapeColor="red";
  }
  else{
   fixedRect.shapeColor="green";
   movingRect.shapeColor="green";
  }

  drawSprites();  
}