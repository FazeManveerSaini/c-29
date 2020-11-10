class Launch {
    constructor(body1, point){
        var options = {
            bodyA : body1,
            pointB : point,
            length : 1,
            stiffness : 0.004
        }

        this.body = Matter.Constraint.create(options);

        World.add(world, this.body);
    }
    fly(){
        this.body.bodyA=null;
    }
    attach(body){
        this.body.bodyA=body;
    }
    display() {
        if(this.body.bodyA){
        var pointA = this.body.bodyA.position;
        var pointB = this.body.pointB;
        // push ();
        strokeWeight(5);
        stroke("white");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        // pop ();
        }
    }
}