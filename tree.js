class Tree {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
    this.image = loadImage("tree.png")

      this.body = Bodies.rectangle(x,y,600,600,options);
      this.width = 600;
      this.height = 600;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y,600,600)
      
    }
  };