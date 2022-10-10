let state = 0;
let timer = 0;
let x = 0;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {
  background("white");
  fill("yellow");
  rect(width/2, height/2,200,600);  
  switch (state) {

    case 0: //Green
      fill("grey");
      ellipse(width/2, height/2-170, 150,150);
      ellipse(width/2, height/2, 150,150);
      fill("green");
      ellipse(width/2,height/2+170,150,150);
      v= 5;
      timer++;
      if (timer > 5 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1://yellow
    fill("grey");
    ellipse(width/2, height/2-170, 150,150);
    fill("yellow");
    ellipse(width/2, height/2, 150,150);
    fill("grey");
    ellipse(width/2,height/2+170,150,150);
    v=2;
  
    timer++;
    if (timer > 3 * 60) {
      timer = 0;
      state = 2;
    }
      break;

    case 2://red
    fill("red");
    ellipse(width/2, height/2-170, 150,150);
    fill("grey");
    ellipse(width/2, height/2, 150,150);
    ellipse(width/2,height/2+170,150,150);
    if(x>=width/2 && x<=width/2) {v=0;}
    else{ v=2;}
    timer++;
    if (timer > 5 * 60) {
      timer = 0;
      state = 0;
    }
      break;

  }
  fill("blue");
  rect(x,height-75,100,50);
  x=x+v;
  if(x>width) x=0;
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}

