let state = -1;
let s1,s2,s3;
function preload(){
  s1= loadSound("assets/allthat.mp3");
  s2= loadSound("assets/creativeminds.mp3");
  s3= loadSound("assets/newdawn.mp3");
}
function setup() {
  createCanvas(800, 800);
}

function draw() {

  background(100);
  
  switch (state) {
    case -1:
      text("please click to begin", 100, 100);
    case 0:
      if(!s1.isPlaying()){
        s1.play();
      }
      text("0", 100, 100);
      break;

    case 1:
      if(!s2.isPlaying()){
        s2.play();
      }
      text("1", 100, 100);
      break;

    case 2:
      if(!s2.isPlaying()){
        s2.play();
      }
      text("2", 100, 100);
      break;

  }
}

function mouseReleased() {
  s1.stop();
  s2.stop();
  s3.stop();
  state++;
  if (state > 2) state = 0;

}
function touchStarted() {
  getAudioContext().resume();
}
