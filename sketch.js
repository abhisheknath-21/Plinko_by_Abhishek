const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles= [];
var plinkos= [];
var divisions= [];
var divisionHeight=300;

function setup() {

  engine = Engine.create()
  world = engine.world;

  var canvas = createCanvas(480,800);

  ground1 = new Ground(240, 800, 480, 30);

  for(var k = 0; k <=width; k = k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 75))
  }

  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j, 175))
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 275))
  }

  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j, 375))
  }




}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  ground1.display();

  for (var k = 0;  k< divisions.length;  k++){
    divisions[k].display();
  }

  for (var j=0; j< plinkos.length; j++){
    plinkos[j].display();
  }

  ParticleDisplay();
  
  for (var j=0; j< particles.length; j++){
    particles[j].display();
  }



  

  drawSprites();
}

function ParticleDisplay(){
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),  10, 10))
  }
}