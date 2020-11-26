class chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.0,
            length: 150
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    

    display(){
       
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
            
        stroke(48,22,8);
        strokeWeight(7);
        line(pointA.x , pointA.y, pointB.x, pointB.y);
        //line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                
        pop();
        }
    }