const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

   ground1 = new Ground(590, 380, 300, 20);
   ground2 = new Ground(600, 490, 1200, 20);
   ground3 = new Ground(990, 240, 200, 20);

    block1 = new Block(590, 155, 30, 40);

    block2 = new Block(560, 195, 30, 40);
    block3 = new Block(590, 195, 30, 40);
    block4= new Block(620, 195, 30, 40);

    block5 = new Block(530, 235, 30, 40);
    block6 = new Block(560, 235, 30, 40);
    block7 = new Block(590, 235, 30, 40);
    block8 = new Block(620, 235, 30, 40);
    block9 = new Block(650, 235, 30, 40);

    block10 = new Block(500, 275, 30, 40);
    block11 = new Block(530, 275, 30, 40); 
    block12 = new Block(560, 275, 30, 40);
    block13 = new Block(590, 275, 30, 40);
    block14 = new Block(620, 275, 30, 40);
    block15 = new Block(650, 275, 30, 40);
    block16 = new Block(680, 275, 30, 40);

    block17 = new Block(930, 135, 30, 40);
    block18 = new Block(960, 135, 30, 40);
    block19 = new Block(990, 135, 30, 40);
    block20 = new Block(1020, 135, 30, 40);
    block21 = new Block(1050, 135, 30, 40);

    block22 = new Block(960, 55, 30, 40);
    block23 = new Block(990, 55, 30, 40);
    block24= new Block(1020, 55, 30, 40);

    block25 = new Block(990, 15, 30, 40);

    


    
    polygon = new Polygon(200, 200, 40, 40);

    slingshot = new SlingShot(polygon.body,{x:200, y:200});
}

function draw(){
    background(56, 44, 44);
    Engine.update(engine);
    strokeWeight(4);
   
   ground1.display();
   ground2.display();
   ground3.display();

   fill(128, 128, 128);
   block1.display();
   
   fill(63, 224, 208);
   block2.display();
   block3.display();
   block4.display();

   fill(225, 192, 203);
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();

   fill(135, 206, 234);
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();

   block17.display();
   block18.display();
   block19.display();
   block20.display();
   block21.display();

   fill(63, 224, 208);
   block22.display();
   block23.display();
   block24.display();

   fill(255, 192, 203);
   block25.display();

   polygon.display();
   slingshot.display();

}

function mouseDragged(){
   Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   slingshot.fly();
}