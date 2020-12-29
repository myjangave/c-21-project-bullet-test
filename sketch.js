var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,50,5);
  bullet.shapeColor = "black";

   wall = createSprite(1200,200,thickness,height/2);
   wall.shapeColor = 
    speed = random(223,321);
     weight = random(30,52);
      thickness = random(22,83);

      bullet.velocityX = speed;

}

function draw() {
  background("lightblue");
  
  if (hasCollied(bullet,wall)){
    bullet.velocityX = 0;
    var Damage = 0.5 * weight * speed * speed /(thickness *thickness *thickness);
     
    if (Damage>10) {
       wall.shapeColor = color(255,0,0);
     }


     if (Damage<10) {
       wall.shapeColor = color(0,255,0);
     }
  } 
 
  drawSprites();
}

function hasCollied(bullet,wall) 
  {  
      bulletRightEdge = bullet.x + bullet.width;
       wallLeftEdge = wall.x;
        if(bulletRightEdge>=wallLeftEdge)
         {
        return true
        }
        else{
        return false;
    }
  }
