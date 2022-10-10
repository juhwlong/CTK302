let numberOfTouches ;
let i1,i2,i3;
function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/catmelion.jpg");
  i2 = loadImage("assets/elephorila.jpg");
  i3 = loadImage("assets/puck.jpg");
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("no one is touching the screen", 5, 22) ; 
      break ;
      
      case 1: 
       text("Look at the Catmelion", 5, 22) ; 
      image(i1, width/2,height/2,100,100);
      break ;
      
      case 2:
      text("That's a Elephorila", 5, 22) ; 
      image(i2, width/2,height/2,100,100);
      break ;
      
      case 3:
     text("Tiny Puck", 5, 22) ; 
     image(i3, width/2,height/2,100,100);
      break ;
    
      
  }
  
}
