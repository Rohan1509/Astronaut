var astronaut,sleep, backgroundIMG, brush, gym, eat, drink, bath, move;


function preload() {
   backgroundIMG = loadImage("images/iss.png");
   sleep = loadImage("images/sleep.png");
   brush = loadAnimation("images/brush.png");
   gym = loadAnimation("images/gym1.png", "images/gym2.png");
   eat = loadAnimation("images/eat1.png", "images/eat2.png");
   drink = loadAnimation("images/drink1.png", "images/drink2.png")
   bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png");
   move = loadAnimation("images/move.png", "images/move2.png");
}

function setup() {
  createCanvas(800,400);

  
  astronaut = createSprite(300,230);
  astronaut.addImage("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(backgroundIMG);
  text("Instructions:", 20, 35);
  text("Up Arrow = Brushing", 20, 55);
  text("Down Arrow = Gymming", 20, 75);
  text("Left Arrow = Eating", 20, 95);
  text("Right Arrow = Bathing", 20, 115);
  text("M key = Moving", 20, 135);
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  

  
  drawSprites();
}