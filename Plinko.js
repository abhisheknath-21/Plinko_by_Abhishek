class Plinko{
    constructor(x,y) {
      var options={
         isStatic:true, 
         friction:0.1, 
         density:1.0
        } 
                                           
         this.x=x;     
         this.y=y;  
         this.r=12;
         this.body=Bodies.circle(this.x, this.y, this.r, options)
         World.add(world, this.body);   
         }       
     display(){    
      var pos=this.body.position; 
      push()
      translate(pos.x, pos.y);                            
      rectMode(CENTER);    
      strokeWeight(3); 
      fill("white");               
      circle(0,0,this.r, this.r);
      pop()
    }
  }