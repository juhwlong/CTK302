let s1 ;
function preload(){
  s1= loadSound("assets/sweet.mp3");
}

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  s1.play();

}

function draw() {
background("black");
fill("white");
text("The name of the song is Sweet", 100, 100, 400, 400);
}
function mouseReleased() {
  if(s1.isPlaying()){
    s1.pause();
  } else {
    s1.play();
  }
}
function touchStarted() {
  getAudioContext().resume();
}
