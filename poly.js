class Poly {

    constructor(x, y, r) {

        this.body = Bodies.circle(x, y, r);
        World.add(world, this.body);
        
        this.r = r;
        this.polyMage = loadImage("polygon.png");

    }

    display () {
       
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.polyMage, 0, 0, this.r, this.r);
        pop();

    }

}