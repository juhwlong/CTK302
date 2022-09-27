let state=0;
let timer=0;
function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
switch(state){
case 0:
  background("#088E35");
  text("Where did Sally go after the explosion?",width/2,height/2);
  break;
  case 1:
    background("#D71515");
    text("Everywhere.",width/2,height/2);
    break;
}
timer++;
if (timer > 4 * 60){
  timer=0; 
  state++;
  if (state>1){
    state=0;
  }
}
}