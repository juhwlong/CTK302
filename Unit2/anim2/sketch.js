let x=0;

function setup() {
  createCanvas(1000, 800);
}

function draw() {
background("pink");
push();
translate(x, 0)
avatar();
x+=5
if(x>width){
  x = -600;
}
pop();

}
function avatar(){
  noStroke();
  fill("black");
  rect(322,450,30,200);
  rect(410,450,30,200);
  fill("green");
  triangle(287,460,476,460,377,299);
  rect(281,450,200,20);
  ellipse(336,557,40,40);
  ellipse(426,557,40,40);
  fill(210, 180, 140);
  ellipse(376, 268, 100,75);
  
  
}
