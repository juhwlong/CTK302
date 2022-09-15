function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER);
  noStroke();
}

function draw() {
  background(173,216,230);

  if (mouseIsPressed) {
    fill("#522719");
    rect(500,400,1000,800);
    fill("#80aeed");
    triangle(391,650,518,650,444,24);
  fill("blue");
    ellipse(1000,0,250,250);
    fill("white");
    rect(500,725, 1000,150);
    rect(337,560,30,200);
    rect(425,560,30,200);
    fill("violet");
    triangle(287,460,476,460,377,299);
    ellipse(444,51,150,100);
    ellipse(336,557,40,40);
    ellipse(426,557,40,40);
    rect(381,470,200,20);
    fill(210, 180, 140);
    ellipse(376, 268, 100,75);
    fill("#80aeed");
    triangle(706,736,874,744,790,173);
    triangle(189,683,42,688,114,57);
    fill("violet");
    ellipse(112,85,150,100);
    ellipse(788,195,150,100);
    fill("white");
    ellipse(454,247,75,50);
    fill("black");
    text("ACHOO",454,247);
    
       
  } else {
    // when the mouse isn't pressed!
    fill("#7f5112");
    triangle(391,650,518,650,444,24);
    fill("black");
    rect(337,560,30,200);
    rect(425,560,30,200);
    rect(500,725, 1000,150);
    fill("green");
  
  triangle(287,460,476,460,377,299);
    ellipse(444,51,150,100);
    ellipse(336,557,40,40);
    ellipse(426,557,40,40);
    rect(381,470,200,20);
    fill(210, 180, 140);
    ellipse(376, 268, 100,75);
    fill("#7f5112");
    triangle(706,736,874,744,790,173);
  triangle(189,683,42,688,114,57);
    fill("green");
    ellipse(112,85,150,100);
    ellipse(788,195,150,100);
    fill("yellow");
    ellipse(1000,0,250,250);
    text("This is Keith, Keith is a great roller blader by day, and by night he has a power that when he sneezes he turns all colors in the world opposite.\n Some nights he will have a sneezing fit for so long people come out to the streets and have a rave. Hero or Villain? You decide.", 450,750);
    text("9-13-22 3Hrs \n 9-14-22 2Hrs",50,25);
  }

  // this shows mouse location - comment it out when you're done!

  //fill(0);
  //text(mouseX + ", " + mouseY, 40, 40);


// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
}
