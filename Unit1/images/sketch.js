let i1, i2, i3 ;

function setup() {
  createCanvas(500, 500);
  i1 = loadImage("assests/Bee.jpg");
  i2 = loadImage("assests/Cat.jpg");
  i3 = loadImage("assests/Otter.jpg");
  imageMode(CENTER);
}

function draw() {
image(i1, width/2, height/2 - 120, 100, 100);
image(i2, width/2, height/2, 100, 100);
image(i3, width/2, height/2 + 120, 100, 100);
}
