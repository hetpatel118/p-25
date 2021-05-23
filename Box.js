class Box {
    constructor(x, y) {
      var options = {
        'density':2,
        'friction': 2,
        'restitution':0.6
      };
      this.body = Bodies.rectangle(x, y,150,130, options);
      this.width = 150;
      this.height = 130;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('orange')
      fill('lightgreen')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  