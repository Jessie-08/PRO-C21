var wall, thickness;

var bullet,speed,wieght;

function setup() {
  createCanvas(1365,400);

  speed=random(223,321);
  wieght=random(30,52);
  thickness=random(22,83);
 
  bullet=createSprite(50,200,50,5);
  bullet.shapeColor=color(255);
  bullet.velocityX = speed;

  wall=createSprite(1285,200,thickness,height/2);
 wall.shapeColor=color(255);
 
}

function draw() {
  background(0);  

//  hasCollided(bullet,wall);

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
  
    var damage = 0.5*wieght*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}
drawSprites();
function hasCollided(bullet,wall)
{
  bulletRightEdge= bullet.x+bullet.width;
  wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge){
return true;
}
return false
}
}