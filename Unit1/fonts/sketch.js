let f1, f2;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assests/bavarian_crown/bavarian.otf");
  f2 = loadFont("assests/binerka/Binerka.otf");
  f3 = loadFont("assests/tempo/tempo.ttf");
  textAlign(CENTER);
}

function draw() {
background("black");
fill("white");
textFont(f1, 48);
text("hello there!", width / 2, 100);
textFont(f2, 48);
text("Binerka!", width / 2, 200);
textFont(f3, 24);
text("SpiderMan!", width / 2, 300);
}
