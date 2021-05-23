const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber,rubber2,rubber3,rubber4,rubber5,rubber6,rubber7,rubber8;
var iron;
var box;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(250,250);
    box = new Box(900,300);
    rubber = new Rubber(800,300,35)
    rubber2 = new Rubber(700,300,30)
    rubber3 = new Rubber(400,300,25)
    rubber4 = new Rubber(300,300,20)
    rubber5 = new Rubber(200,300,5)
    rubber6 = new Rubber(300,300,5)
    rubber7 = new Rubber(550,300,5)
    rubber8 = new Rubber(650,300,5)








}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();
    box.display();
    rubber.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    
   
    
 
}