const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var bin1, bin2, bin3;


function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	paper = new Paper();
	ground = new Ground();

	
	
	bin1 = new Bin(1099, height - 80, 20, 100);
	bin2 = new Bin(1200, height - 25, 220, 20);	
	bin3 = new Bin(1300, height - 82, 20, 100);
	
}

 
function draw() {
	Engine.update(engine);
  ellipseMode(CENTER);
  background(0);
  paper.display();
  
  ground.display();
  fill(244, 169, 187)
  bin1.display();
  bin2.display();
  bin3.display();
}

function keyPressed() {
	if (keyCode ===  UP_ARROW) {
	Matter.Body.applyForce(paper.body ,paper.body.position,{x: 500 ,y: -165});
	}
	}