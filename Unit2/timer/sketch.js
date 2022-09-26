let state = 0;
let timer = 0;
let i1,i2,i3;
function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  i1 = loadImage("assests/birthday.JPG");
  i2 = loadImage("assests/bzneez.jpg");
  i3 = loadImage("assests/landon.jpg");
  imageMode(CENTER);
}

function draw() {
  background(220);
  switch (state) {
    case 0:
      image(i2,200,200,width,height);
      fill("grey");
      rect(150,285,100,20);
      fill("white");
      text("BzNeez on Twitch",200,300);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 1;
      }
      break;
    case 1:
      image(i1, 200,200,width,height);
      fill("grey");
      rect(50,285,300,20);
      fill("white");
      text("Me and my girlfriend Emme on my birthday last year",200,300);
      timer++;
      if (timer > 7 * 60) {
        timer = 0;
        state = 2;
      }
      break;
    case 2:
      image(i3, 200,200,width,height);
      fill("grey");
      rect(75,285,250,20);
      fill("white");
      text("Me and my friend Landon at an AJR concert",200,300);
      timer++;
      if (timer > 5 * 60) {
        timer = 0;
        state = 0;
      }
      break;
  }
}