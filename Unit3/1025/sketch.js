let cars=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  // Spawn one object
  //for(let i=0; 1<20; i++){
  //cars.push(new Car());
    


}

function draw() {
  background("grey");
  for(let i=0; i <cars.length; i++){
  cars[i].display();
  cars[i].move();
  if(cars[i].a<=0){
    cars.splice(i,1);
  }
  }
}




class Car {

  // constructor
  constructor() {
    this.pos = createVector(width/2,height-80) ;
    this.vel = createVector(random(10),random(10)) ;// initialize your attributes here
    this.r=random(255);
    this.g=random(255);
    this.b=random(255);
    this.a=random(200,255); 
    this.s=random(15,25);
  }

  // methods

  display() {
    fill(this.r,this.g,this.b,this.a);
    ellipse(this.pos.x,this.pos.y,this.s);
  }

  move() {
    this.pos.add(this.vel);
    this.a=this.a-5;
  }
}
