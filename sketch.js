var fixedRect, movingRect,A,B;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = true;

  movingRect = createSprite(500, 200, 50, 50);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;

  A = createSprite(20, 100, 50, 50);
  A.shapeColor = "red";
  A.velocityX = 3;

  B = createSprite(600, 100, 50, 50);
  B.shapeColor = "blue";
  B.velocityX = -3;

}

function draw() {
  background(0,0,0);  
 
movingRect.y = mouseY;
movingRect.x = mouseX;

bounceOff(A,B);

if (isTouching(B, movingRect))
{
  B.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}
else
{
  fixedRect.shapeColor = "yellow";
  movingRect.shapeColor = "yellow";
}
  drawSprites();
}



function isTouching(object1, object2)
{
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2 && 
    object1.y - object2.y < object1.height/2 + object2.height/2 &&   
    object2.y - object1.y < object2.height/2 + object1.height/2 ) 
  {
    return true;
  }
  else
  {
    return false;
  }
}


function bounceOff (object1,object2)
{
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2 ) 
{
  object1.velocityX = object1 .velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object1.height/2 + object2.height/2 &&   
  object2.y - object1.y < object2.height/2 + object1.height/2)
  {
    object1.velocityY =  object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }
}


