
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject;
var coolLine, awesomeLine, magicalBobSuspender, flimsyString, parachuteCord;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new bob(200,480,100);
	bobObject2 = new bob(300,480,100);
	bobObject3 = new bob(400,480,100);
	bobObject4 = new bob(500,480,100);
	bobObject5 = new bob(600,480,100);

	roofObject = new roof(400,50,720,50);

	veryCoolRope = new rope(bobObject1.body,-100*2,0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  text(mouseX +',' + mouseY ,100,100)

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  veryCoolRope.display();
  
  drawSprites();
 
}



