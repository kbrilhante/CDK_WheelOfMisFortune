let wheelJSON;
let wheel;

function preload() {
  wheelJSON = loadJSON("./wheel_EN.json");
}

function setup() {
  createCanvas(600, 600);
  ellipseMode(RADIUS);
  console.log(wheelJSON);
  wheel = new Wheel(wheelJSON.wheel_segments);
}

function draw() {
  background(50);
  wheel.show();
}