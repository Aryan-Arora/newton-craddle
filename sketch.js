
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




var engine,world;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;


var chain1 ;








function preload()
{
	
}

function setup() {
	createCanvas(1200, 1200);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

bob1= new bob(360,500,60)
bob2= new bob(420,500,60)
bob3=new bob(480,500,60)
bob4=new bob(540,500,60)
bob5=new bob(600,500,60)
chain1=new rope(bob1,{x:200,y:200})







	Engine.run(engine);
	World.add(world,roof1)  
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  
  



  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  chain1.display();
  
  
  
  
    drawSprites();
 
}



