const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var bgImg;
var boy , boyImg;
var snowman , snowmanImg;

var snow = [];

function preload(){
  bgImg = loadImage("snow1.jpg")
  boyImg = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png","boy8.png")
  snowmanImg = loadImage("snowman.png")
  
  
}

function setup() {
  createCanvas(800,500); 
  engine = Engine.create();
	world = engine.world;

  
  boy = createSprite(800, 300, 50, 50);
  boy.addAnimation("boyImage",boyImg)
  boy.scale = 0.5
  boy.velocityX = -3.5
  boy.lifetime = 300 

  snowman = createSprite(400,400,50,50)
  snowman.addImage("snow",snowmanImg)
  snowman.scale =  0.03

  Engine.run(engine);
}

function draw() { 
  background(bgImg); 
  
  if(frameCount % 10 === 0){
    snow.push(new Snow(random(100,800),10,10))
  }
  for (var p = 0 ; p < snow.length; p++){
    snow[p].display();
  }
 drawSprites();
}