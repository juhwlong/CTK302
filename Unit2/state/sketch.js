let state = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("red");
      for (let j = 0; j <= 400; j += 25) {
        for (let i = 0; i <= 400; i += 25) {
          fill("pink");
          rect(i, j, 20, 20);
        }
      }
      break;
    case 1:
      background("blue");
      for (let j = 0; j <= 400; j += 60) {
        for (let i = 0; i <= 400; i += 60) {
          fill("purple");
          rect(i, j, 15, 25);
        }
      }
      break;
    case 2:
      background("green");
      for (let j = 0; j <= 400; j += 10) {
        for (let i = 0; i <= 400; i += 30) {
          fill("grey");
          rect(i, j, 10, 10);
        }
      }
      break;
    case 3:
      background("purple");
      for (let j = 0; j <= 400; j += 40) {
        for (let i = 0; i <= 400; i += 25) {
          fill("yellow");
          rect(i, j, 15, 10);
        }
      }
      break;
    case 4:
      background("orange");
      for (let j = 0; j <= 400; j += 70) {
        for (let i = 0; i <= 400; i += 5) {
          fill("green");
          rect(i, j, 3, 3);
        }
      }
      break;
  }
}
function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}
