let state=0;
let x=0;
let timer=0;
let i1,i2,i3,i4,i5,i6;
let z=700;
function setup() {
  createCanvas(800,800);
  i1 =loadImage("assets/carclear.png");
  i2=loadImage("assets/cargclear.png");
  i3=loadImage("assets/sunclear.png");
  i4=loadImage("assets/cloud.png");
  i5=loadImage("assets/cloud2.png");
  i6=loadImage("assets/elmo.png");
  rectMode(CENTER);
  textAlign(CENTER);
}

function draw() {
background("lightblue");
fill("black");
text("Don't you dare click the sun on a red light!",400,500);
text(mouseX +","+ mouseY, 20,20) ;
fill("yellow");
image(i3,600,100,200,200);
image(i4,100,100,150,150);
image(i4,275,300,200,200);
image(i4,550,150,200,200);
image(i5,50,350,150,100);
image(i5,400,50,150,100);
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
  if(z>=550 && z<=550){v=0;}
  else{v=2;}
  if(x>=250 && x<=250) {v=0;}
    else{ v=2;}
      timer++;
      if (timer > 6 * 60) {
        timer = 0;
        state = 0;
      }
      break;
      case 3: //elmo
      background("black");
      image(i6,0,0,width,height);

}
fill("black");
  rect(400,750,800,100);
  image(i1,x,height-50,100,50);
  x=x+v;
  if(x>width) x=0;
  image(i2,z,height-100,100,50);
  z=z-v;
  if(z<0) z=800;
  
}
function mouseReleased(){
  if((mouseX > 650)&&(mouseX<750)&&(mouseY>150)&&(mouseY<240))
  state++;
  if (state>3) state=0;
}
