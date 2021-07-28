class Block {
    constructor(x, y, width, height) {
        var options = {
            isStatic : false,

            // Fall Down Peasants :D
            friction : 0.0000000000000000000000000000000000000000000000001,
            density : 0.0000000000000000000000000000000000000000000000001,
            restitution : 0.1         
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

        this.image = loadImage("block.png");
        // Transparency
        this.trans = 255;
      }

      display(){
        var angle = this.body.angle;
        var pos = this.body.position;

        if (this.body.speed < 3){
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0);
          pop();
        } else {
          World.remove(world, this.body);
          push();
          translate(pos.x, pos.y);
          this.trans = this.trans - 5;
          tint(255, this.trans);
          image(this.image, 0, 0);
          pop();
        }
        

      }
}
