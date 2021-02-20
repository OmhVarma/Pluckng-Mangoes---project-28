const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var log6, rope1;
var boyImage,treeImage
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;

function preload() {
    boyImage = loadImage("Plucking mangoes/boy.png");
    treeImage = loadImage("Plucking mangoes/tree.png");
}

function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    stone = new Stone(100,100);

    rope1 = new Rope(stone.body,{x:160,y:830});

    mango1 = new Mango(840,650,50,70);
    mango2 = new Mango(800,500,50,70);
    mango3 = new Mango(750,630,50,70);
    mango4 = new Mango(935,620,50,70);
    mango5 = new Mango(1050,570,50,70);
    mango6 = new Mango(940,540,50,70);
    mango7 = new Mango(960,490,50,70);
}

function draw(){
    background(255);
    Engine.update(engine);

    ground.display();

    image(treeImage,660,440,550,550);

    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();

    stone.display();

    detectcollision(stone,mango1);
    detectcollision(stone,mango2);
    detectcollision(stone,mango3);
    detectcollision(stone,mango4);
    detectcollision(stone,mango5);
    detectcollision(stone,mango6);
    detectcollision(stone,mango7);

    rope1.display(); 

    image(boyImage,100,750,300,300) 

   text(mouseX +","+mouseY,mouseX,mouseY)
}

function mouseReleased(){
 rope1.fly()
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
}

// function detectollision(lstone,lmango){
// // { var collision = Matter.SAT.collides(lstone,lmango);
// //      if(collision.collided){ console.log("collided"); 
// //      Matter.Body.setStatic(lmango,false); } 
//      mangoBodyPosition=lmango.body.position 
//      stoneBodyPosition=lstone.body.position 
//      var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
//      //console.log(distance) 
//      // console.log(lmango.r+lstone.r) 
//      if(distance<=lmango.r+lstone.r) { 
//          //console.log(distance);
//           Matter.Body.setStatic(lmango.body,false); } }

          function detectcollision(lstone, lmango)
          { m= lmango.body.position; s= lstone.body.position;
             var distance = dist(s.x , s.y , m.x , m.y);
              if(distance<= lmango.r+ lstone.r)
              { Matter.Body.setStatic(lmango.body, false); } }