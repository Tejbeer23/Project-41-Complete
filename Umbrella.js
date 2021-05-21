class Umbrella{
    constructor(x,y,r){
      var options={
            isStatic:true
        }
        this.image = loadImage("Walking Frame/walking_1.png");      
        this.umbrella = Bodies.circle(x,y,r,options);
        this.radius = 50;
        World.add(world,this.umbrella);
    }
display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x , pos.y+70 , 300,300);
 }
}