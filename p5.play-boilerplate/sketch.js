const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5;
var ground,ball,constraint;

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;

box1 = new Box(400,100,50,50)
box2 = new Box(400,100,50,50)
box3 = new Box(400,100,50,50)
box4 = new Box(400,100,50,50)
box5 = new Box(400,100,50,50)
box6 = new Box(500,100,50,50)
box7 = new Box(500,100,50,50)
box8 = new Box(500,100,50,50)
box9 = new Box(500,100,50,50)
box10 = new Box(500,100,50,50)
box11 = new Box(600,100,50,50)
box12 = new Box(600,100,50,50)
box13 = new Box(600,100,50,50)
box14 = new Box(600,100,50,50)
box15 = new Box(600,100,50,50)


ground = new Ground(400,350,800,20)
ball = new Ball(350,300)
constraint = new chain(ball.body,{x:300,y:50})

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  drawSprites();

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  ground.display()
  ball.display()
  constraint.display()
}

function mouseDragged(){
  
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY} );
   // }
}
