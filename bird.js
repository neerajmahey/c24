class bird{
    constructor(x,y){
        var option={
            restitution:0.8,
            friction:0.5,
            density:1.0
            }
            this.body=Bodies.rectangle(x,y,50,50,option);
            this.width=50;
            this.height=50;
            World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        var angle=this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("red");
        fill("brown");
        rect(0,0,this.width,this.height)
 pop();
    }
}