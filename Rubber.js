class Rubber{
    constructor(x, y, r) {
      var options = {
        'density':2,
        'friction': 2,
        'restitution':0.6
      };
      this.body = Bodies.circle(x, y,r, options);
      this.radius = r;
      this.x = x;
	  this.y = y;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('lightyellow')
      ellipseMode(RADIUS)
      ellipse(0, 0, this.radius,this.radius);
      pop();
    };
  };
	
	