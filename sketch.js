const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,groundbody;

var dropzoneleft,leftsprite;
var dropzoneright,rightsprite;
var dropzonemid,rightmid; 
var bin,binimg;

var trash,trashbody;

function preload()
{
	 redcircle = loadImage("trash.png");
	binimg     = loadImage("dustbingreen.png"); 
}

function setup() {
	createCanvas(1800, 700);
var difference = 100;

	engine = Engine.create();
	world = engine.world;

	trash = createSprite(100,625,30,30);
	trash.addImage(redcircle);
	trash.scale = 0.05;
	//Create the Bodies Here.

dropzoneleft = Bodies.rectangle(width/2-60,560,15,165,{isStatic:true});
leftsprite = createSprite(width/2-60,560,15,165);
leftsprite.shapeColor = color(255,0,0);
World.add(world,dropzoneleft);

dropzoneright = Bodies.rectangle(width/2+60,560,15,165,{isStatic:true});
rightsprite = createSprite(width/2+60,560,15,165);
rightsprite.shapeColor = color(255,0,0);
World.add(world,dropzoneright);

dropzonemid = Bodies.rectangle(width/2,650,125,15,{isStatic:true});
midsprite = createSprite(width/2,650,134.5,15);
midsprite.shapeColor = color(255,0,0);
World.add(world,dropzonemid);

	rectMode(CENTER);
 ground = createSprite(400, 655,180000,10);

groundbody= Bodies.rectangle(400,655,18000,10,{isStatic:true});
World.add(world,groundbody);
options = {isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
	}
trashbody = Bodies.circle(100,625,30,options);
bin = createSprite(width/2,550,135,50);
bin.addImage(binimg);
bin.scale = 0.6;

World.add(world,trashbody);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  trash.x = trashbody.position.x;
  trash.y = trashbody.position.y;

if (keyCode === UP_ARROW){
Matter.Body.applyForce(trashbody,trashbody.position,{x:7,y:-12});

Matter.Render.create(trash);
}

  drawSprites();

}