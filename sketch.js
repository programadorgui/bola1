
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var bola_option = {
		isStatic: false,
		restitution:0.4,
		friction:0,
		density:1.4
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



