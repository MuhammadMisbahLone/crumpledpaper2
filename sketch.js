var crumpledpaperIMG, crumpledpaperSprite;
var dustbinIMG, dustbinSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){


}

	


function setup() {
	createCanvas(800, 700);
	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    crumpledpaperSprite=createSprite(200, 200, 10,10);
	crumpledpaperSprite.addImage(crumpledpaperIMG);
	crumpledpaperSprite.scale=0.4;

	dustbinSprite=createSprite(200, 200, 10,10);
	dustbinSprite.addImage(dustbinIMG);
	dustbinSprite.scale=0.4;
	//Create a Ground
	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);
	
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
  rect(ground.body.position.x,ground.body.position.y,width,10);
  
  drawSprites();
  
}
function keyPressed() {

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.position,{x:10,y:-10})
	}
}


