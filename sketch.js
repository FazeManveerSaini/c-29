const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(800,690,1600,10);
	tree = new Tree(1000,400);
	stone = new Stone(100,350,50,50);
	m1 = new Mango(900,150,8);
	m2 = new Mango(950,120,10);
	m3 = new Mango(1000,100,7);
	m4 = new Mango(950,60,9);
	m5 = new Mango(1050,60,6);
    boy = new Boy(300,100,200,200)
	slingShot = new Launch(stone.body, {x:200,y:450})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  tree.display();
  boy.display()
  stone.display()
slingShot.display()
    m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();

  drawSprites();
  collision(stone,m1);
	collision(stone,m2);
	collision(stone,m3);
	collision(stone,m4);
	collision(stone,m5);
	
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed()
{
    if(keyCode == 32)
    {
        slingShot.attach(stone.body);
    }
}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}