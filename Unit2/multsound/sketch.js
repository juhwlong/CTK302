let state = -1;
let s1,s2,s3;
let i1,i2,i3;
function preload(){
  s1= loadSound("assets/allthat.mp3");
  s2= loadSound("assets/creativeminds.mp3");
  s3= loadSound("assets/newdawn.mp3");
  
}
function setup() {
  createCanvas(800, 800);
  i1 = loadImage("assets/Bee.jpg");
  i2 = loadImage("assets/Cat.jpg");
  i3 = loadImage("assets/Otter.jpg");
  imageMode(CENTER);
}

function draw() {

  background(100);
  
  switch (state) {
    case -1:
      text("please click to begin", 100, 100);
      break;
    case 0:
      background("blue");
      if(!s1.isPlaying()){
        s1.play();
      }
      image(i1,width/2,height/2, 150,150);
      text("All That", 100, 100);
      break;

    case 1:
      if(!s2.isPlaying()){
        s2.play();
      }
      background("green");
      image(i2,width/2,height/2, 150,150);
      text("Creative Minds", 100, 100);
      break;

    case 2:
      if(!s3.isPlaying()){
        s3.play();
      }
      background("orange");
      image(i3,width/2,height/2, 150,150);
      text("New Dawn", 100, 100);
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
