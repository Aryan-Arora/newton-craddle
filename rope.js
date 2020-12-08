class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            angularStiffness:1,
            length: 220
        }
       
        this.pointB = pointB
        this.x=bodyA.x
        this.y=bodyA.y
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    

    display(){
        
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
			strokeWeight(7);
			stroke("#fff")
            line(pointA.x, pointA.y, pointB.x , pointB.y);
            
            
        }
    }
}