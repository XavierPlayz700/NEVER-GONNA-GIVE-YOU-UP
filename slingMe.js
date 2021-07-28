class flingMe {

     constructor (body, anchor) {

        var options = {
            bodyA : body,
            pointB : anchor,
            stiffness : 0.004,
            length : 0.25
        }

        this.bodyA = body;
        this.pointB = anchor;

        this.fling = Constraint.create(options);
        World.add(world, this.fling);

     }

     attach (body) {

        this.fling.bodyA = body;

     }

     fly () {

        this.fling.bodyA = null;

     }

     display () {

        if (this.fling.bodyA) {

            var posA = this.fling.bodyA.position;
            var posB = this.fling.pointB;

            push();
            strokeWeight(3);
            stroke("black");
            line(posA.x, posA.y, posB.x, posB.y);
            pop();

        }

     }




}