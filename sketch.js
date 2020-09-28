const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground1,ground2,ground3,ground4;
var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight  =  300;

function setup() {
  createCanvas(480,580);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240,575,480,10);
  ground2 = new Ground(240,7,480,10);
  ground3 = new Ground(1,280,10,580);
  ground4 = new Ground(475,280,10,580);
  ground = new Ground1(238,565,464,10);
  
}

function draw() {
  background("black");  
  Engine.update(engine);
  
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground.display();

  for(var k; k <= width; k = k+80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }   
  
  for(var j = 40; j <= width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j <= width-10; j = j+50)
  {
    plinkos.push(new Plinko(j,140));
  }
  for(var j = -10; j <= width-10; j = j+50)
  {
    plinkos.push(new Plinko(j,200));
  }
  for(var j = -35; j <= width-10; j = j+50)
  {
    plinkos.push(new Plinko(j,255));
  }
  
  for(var j = 0; j<plinkos.length; j++)
  {
    plinkos[j].display();
  }
  for(var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }
  if(frameCount%90 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,5));
  }
}