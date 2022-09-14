function setup(){
  createCanvas(720, 400);
  
  noStroke();
}

function draw() {
  background(0, 220 ,255);
  fill(230);
  triangle(0, 400, 720, 400, 720, 300);

  

  // fill(204);
  // quad(189, 18, 216, 18, 216, 360, 144, 360);

  fill(255);
  ellipse(390, 314, 72, 72);
  ellipse(390, 260, 65, 65);
  ellipse(390, 216, 45, 45);
  ellipse(132,54,45,45);
  ellipse(148,40,45,45);
  ellipse(142,24,45,45);
  ellipse(123,21,45,45);
  ellipse(115,37,45,45);
  ellipse(260,85,45,45);
  ellipse(276,69,45,45);
  ellipse(287,89,45,45);
  ellipse(308,76,45,45);
  ellipse(293,65,45,45);
  ellipse(314,101,45,45);
  ellipse(264,116,45,45);
  ellipse(290,119,45,45);
  ellipse(370,38,45,45);
  ellipse(381,52,45,45);
  ellipse(388,41,45,45);
  ellipse(404,53,45,45);
  ellipse(423,41,45,45);
  ellipse(433,45,45,45);
  ellipse(432,56,45,45);
  ellipse(453,38,45,45);
  ellipse(455,56,45,45);
  
  fill(245);
  triangle(720, 400, 0, 400, 0, 280);
  fill("brown");
  rect(97, 229, 100, 100);
  triangle(501,333,529,221,564,330);
  fill("black");
  triangle(55, 231, 142, 173, 243, 231);
  ellipse(382, 212, 10, 10);
  ellipse(397, 212, 10, 10);
  rect(130,276,30,53);
  fill(255);
  text(mouseX +","+ mouseY, 20,20) ;
  fill("yellow");
  ellipse(625,1,100, 100);
  fill("orange");
  triangle(389,223,389,227,406,225);
  fill("green");
  ellipse(542,228,45,45);
  ellipse(554,223,45,45);
  ellipse(560,207,45,45);
  ellipse(550,197,45,45);
  ellipse(534,194,45,45);
  ellipse(523,190,45,45);
  ellipse(506,195,45,45);
  ellipse(504,211,45,45);
  ellipse(513,221,45,45);
  ellipse(528,230,45,45);
}
function mouseReleased(){
  print(mouseX +","+ mouseY)
}
