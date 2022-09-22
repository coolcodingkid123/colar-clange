var box;

function setup() {
  createCanvas(1000,1000);
  
}

function draw() 
{
  background("yellow"); 
  if(keyDown(LEFT_ARROW)){
    background("red");
  }

  if(keyDown(RIGHT_ARROW)){
    background("blue");

  }
  if(keyDown(UP_ARROW)){
    background("white");
  }

  if(keyDown(DOWN_ARROW)){
    background("black");
  }

drawSprites();
}




