
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
  background("blue");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(fear, rating) {
    // only the order of these parameters matters!
    this.fear = fear;
    this.rating = rating;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("red");
    noFill();
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("white");
    text(this.fear + "\n" + this.rating,
      this.pos.x,
      this.pos.y
    );
    this.pos.add(this.vel);
    if (this.pos.x>width)
      this.pos.x=0;
  
  
    
  }
  
  
}
