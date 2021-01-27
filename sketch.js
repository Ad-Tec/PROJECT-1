function setup() {
  createCanvas(400,400);
  movingsprite=createSprite(300, 200, 50, 50);
  movingsprite.shapeColor="Green";
  fixedsprite=createSprite(200, 200, 50, 50);
  fixedsprite.shapeColor="Red";
}

function draw() {
  background(255,255,255);  
  movingsprite.x=World.mouseX;
  movingsprite.y=World.mouseY;
  drawSprites();
  if (movingsprite.x-fixedsprite.x<=movingsprite.width/2+fixedsprite.width/2 &&
      fixedsprite.x-movingsprite.x<=movingsprite.width/2+fixedsprite.width/2 &&
     movingsprite.y-fixedsprite.y<=movingsprite.height/2+fixedsprite.height/2 &&
     fixedsprite.y-movingsprite.y<=movingsprite.height/2+fixedsprite.height/2 ) {
  movingsprite.shapeColor= rgb(random(10,100),random(10,100),random(10,100));
  fixedsprite.shapeColor= rgb(random(10,100),random(10,100),random(10,100));

} else {
  movingsprite.shapeColor= "green";
  fixedsprite.shapeColor="red";
  }
}