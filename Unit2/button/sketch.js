let state=0;
function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
switch(state){
case 0:
  background("#CD0EAD");
  text("Do you know whats odd?",width/2,height/2);
  break;
  case 1:
    background("#0EC0CD");
    text("Every other number.",width/2,height/2);
    break;
}
rect(100,100,100,100);
}
function mouseReleased(){
if((mouseX > 100)&&(mouseX<200)&&(mouseY>100)&&(mouseY<200)){
state++;
if(state>1)
  state=0;
}
}
