
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render
var ground, ball

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,680,2000,10);
	ball=new Paper(200,450,40);

var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });

dustbin=new Dustbin(1000,510);
dustbin.scale=0.1;
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
	background(225);
	Engine.update(engine);
  ball.display();
  dustbin.display();
ground.display();


}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  
	}
}




