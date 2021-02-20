class Rope{
    constructor(A,point){
        var opt = {
        bodyA: A,
        pointB: point,
        length: 10, 
        stiffness: 0.4 };

    this.rope = Constraint.create(opt);

    World.add(world,this.rope)
    }

    fly(){
    this.rope.bodyA = null

    }

    display(){
        if(this.rope.bodyA){

        
    strokeWeight(3);
    line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.pointB.x,  this.rope.pointB.y);
    };
}
}
