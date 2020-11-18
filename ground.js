class Ground{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(800, 700, 1605, 30, options);
        this.width = 1600;
        this.height = 30;
        this.x = 800;
        this.y = 670;
        World.add(world, this.body); 
    }


    display(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height) 
    }
}