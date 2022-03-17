const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Composite = Matter.Composite;
const Composites = Matter.Composites;

//Variáveis
let engine, world;

var ground;
var fruit;
var fruit_con;
var rope;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(200,690,600,20);
  fruit = Bodies.circle(300,300,20);
  rope = new Rope(7, {x:245 ,y:50}); 
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
}

function draw() 
{
  background(51);
  rope.show();
  ellipse(fruit.position.x, fruit.position.y, 30,30);
  Engine.update(engine);

  //Exibir objetos na tela
  ground.display();
   
}




