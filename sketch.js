const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function setup() {
  createCanvas(700, 500);
  engine = Engine.create();
	world = engine.world; 

  base1 = new base(350, 450);

  block1 = new block(200, 20);
	block2 = new block(270, 35);
	block3 = new block(340, 50);
	block4 = new block(410, 65);
	block5 = new block(480, 80);
	block6 = new block(550, 95);
	block7 = new block(620, 110);
	block8 = new block(130, 5);
}

function draw() {
  background("blue"); 
  Engine.update(engine);

  base1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  drawSprites();
}