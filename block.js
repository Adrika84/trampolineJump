class block {
    constructor(x, y) {
      var options = {
          isStatic: false,
          restitution: 2.2
      }
      this.body = Bodies.rectangle(x, y, 50, 60, options);
      this.width = 50;
      this.height = 60;
      World.add(world, this.body);
      this.visibility = 255;
    }
    display(){
      var pos =this.body.position;
          rectMode(CENTER);
          fill("orange")
          rect(pos.x, pos.y, this.width, this.height);
    }
}