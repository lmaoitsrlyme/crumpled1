class Paper {
    constructor()
{
    var options = {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 4
    }
    //this.radius = 40/2;
    //this.x = 300;
    //this.y = 400;
    this.body = Bodies.circle(240, 670, 20, options);
    
    World.add(world, this.body);
}

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill(255);
       ellipseMode(RADIUS);
       ellipse(0, 0, 20,20)
       pop();
}

}