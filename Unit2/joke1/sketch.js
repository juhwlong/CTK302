let state=0;
function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
switch(state){
case 0:
  background("#990BCD");
  text("What did Batman say to robin before they got in the car?",width/2,height/2);
  break;
  case 1:
    background("#0535B7");
    text("Get in the car.",width/2,height/2);
    break;
}
}
function mouseReleased(){
state++;
if(state>1){
  state=0;
}
}