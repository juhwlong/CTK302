var bubbles = [];
let url = "";
let state=0;
let i1,i2,i3,i4,i5,i6,i7,i8,i9;
let s1;
function preload(){
  s1= loadSound("assets/music.wav");
}
function setup() {
  createCanvas(800, 800);
  i1 = loadImage("assets/start.jpg");
  i2 = loadImage("assets/game.jpg");
  i3 = loadImage("assets/end.jpg");
  i4 = loadImage("assets/mouse.png");
  i5 = loadImage("assets/cloud1.png");
  i6 = loadImage("assets/cloud2.png");
  i7 = loadImage("assets/cloud3.png");
  i8 = loadImage("assets/cloud4.png");
  i9 = loadImage("assets/cloud5.png");
  let key = "1b4BKXM6d0zwM4toJ4wkddn_IFPavadCIVmDuTjEld3s"
  //let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  ellipseMode(CENTER);
  rectMode(CENTER);
}
function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What is something you're afraid of? (as little words as possible)"],
        data[i]["On a scale of 1-5 how afraid of this are you?"]
      )); // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
switch (state){
  case 0://start screen
  background(i1);
  break;
  case 1://gameplay screen
  background(i2);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
  s1.play;
  if(!s1.isPlaying()){
    s1.play();
  
  }
  break;
  case 2://end game screen
  background(i3);
  s1.pause();
  break;

}
}
function mouseReleased(){
  if((mouseX > 280)&&(mouseX<510)&&(mouseY>650)&&(mouseY<750)){
  state++;
  }
  
}
function touchStarted(){
  getAudioContext().resume();
}
class Bubble {
  constructor(fear, rating) {
    // only the order of these parameters matters!
    this.fear = fear;
    this.rating = rating;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    //stroke("red");
    //noFill();
    image(i5,this.pos.x-10, this.pos.y-50,150,150);
    fill("red");
    text(this.fear, 
      //+ "\n" + this.rating,
      this.pos.x+20,
      this.pos.y+20 
    );
    this.pos.add(this.vel);
    if (this.pos.x>width)
      this.pos.x=0;
  
  
    
  }
  
  
}