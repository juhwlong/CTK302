let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let humidity = 0;
let myColors=["#4DF2DD","#0DB1B9","#658FE8","#1C32E0","#0A9014","#41EC55","#91FA86","#CBF11E","#F1EC2C","#E7831D","#F02F13","#C40707"];

function setup() {
  createCanvas(400, 400);

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Orlando,FL,US&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US

  // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx

  let myIDString = "appid=c00b51331724e2352ba67c458db2ed8b";

  let myTotalString = myCityString + myIDString;

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
}

function draw() {
  switch (state) {
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      let bg=0;
      bg=int(temperature/10);
      bg=constrain(bg,0,myColors.length-1);
      background(myColors[bg]);
      
      fill("black");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed+"Mph", 20, 40);
      text("temp is " + temperature, 20, 60);
      text("hummidity is " + humidity+"%", 20, 80);

      // cloud
      fill("white");
      noStroke();
      ellipse(x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;
  }
}
