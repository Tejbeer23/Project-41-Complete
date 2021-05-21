const Engine = Matter.Engine;
const  World = Matter.World;
const Events = Matter.Events;
const  Bodies = Matter.Bodies;

var maxDrops = 100;
var drops = [];
var boy_img;

var num = math.random(1,4) ;
  
function preload(){
    thunder1_img=loadImage("1.png");
    thunder2_img=loadImage("2.png");
    thunder3_img=loadImage("3.png");
    thunder4_img=loadImage("4.png");
    
}

function setup(){
    canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(10,250,50,50);
 
    //creating drops
  if(frameCount % 150 === 0){  
    for(var i=0 ; i<maxDrops ; i++){
        drops.push(new Drops(random(0,400),random(0,400)));
    }
  }
}

function draw(){
    background("black");  
    Engine.update(engine);

//creating thunder
rand = Math.round(random(1,4));
if(frameCount % 80 === 0){
  thunderCreatedFrame = frameCpuunt;
  thunder = createSprite(random(10,370),random(10,30),10,10)
    switch(rand){
      case 1 : 
        thunder.addImage(thunder1_img);
        break;
      case 2:
        thunder.addImage(thunder2_img);
        break;
      case 3:
        thunder.addImage(thunder3_img);
        break;
      case 4:
        thunder.addImage(thunder4_img);
        break;
        default:break;
    }
    thunder.scale = random(0.3,0.6);
  }

    if(thunderCreatedFrame + 10 === frameCount && thunder){
      thunder.display();
    }

 umbrella.display();

 //displaying rain drops
 for(var i = 0 ; i<maxDrops ; i++){
   drops[i].showdrop();
   drops[i].updateY();
 }

 drawsprites();
 
}   



