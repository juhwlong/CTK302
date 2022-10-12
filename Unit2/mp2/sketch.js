let state=0;
let x=0;
let timer=0;
let i1,i2;
let z=800;
function setup() {
  createCanvas(800,800);
  i1 =loadImage("assets/carclear.png");
  i2=loadImage("assets/cargclear.png");
  rectMode(CENTER);
}

function draw() {
background("lightblue");
fill("yellow");
rect(400,600,75,150);
switch (state){
  case 0://green
  fill("black");
  ellipse(400,600-45,40);
  ellipse(400,600,40);
  fill("green");
  ellipse(400,600+45,40);
  v= 5;
      timer++;
      if (timer > 5 * 60) {
        timer = 0;
        state = 1;
      }
      break;
      case 1://yellow
  fill("black");
  ellipse(400,600-45,40);
  fill("yellow");
  ellipse(400,600,40);
  fill("black");
  ellipse(400,600+45,40);
  v= 3;
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 2;
      }
      break;
      case 2://red
  fill("red");
  ellipse(400,600-45,40);
  fill("black");
  ellipse(400,600,40);
  ellipse(400,600+45,40);
  if(x>=width/2 && x<=width/2) {v=0;}
    else{ v=3;}
      timer++;
      if (timer > 6 * 60) {
        timer = 0;
        state = 0;
      }
      break;
}
fill("black");
  rect(400,750,800,100);
  image(i1,x,height-50,100,50);
  x=x+v;
  if(x>width) x=0;
  
  
}
function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
