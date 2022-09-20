let x=0;
let f1;
function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assests/bavarian_crown/bavarian.otf");
}

function draw() {
  background("blue");
  fill("violet");
  textFont(f1);
  textSize(100);
text("Your Mom",x,250);
x+=5;
if(x>width){
  x=-500;
}

}
