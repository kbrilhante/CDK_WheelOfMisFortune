let wheelJSON;
let game;

function preload() {
  wheelJSON = loadJSON("./wheel_EN.json");
}

function setup() {
  createCanvas(600, 600);
  ellipseMode(RADIUS);
  console.log(wheelJSON);
  game = new Game(wheelJSON);
}

function draw() {
  background(50);
  game.show();
}

function mousePressed() {
  game.wheel.startSpin()
}