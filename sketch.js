const SAT = 100;
const LIGHT = 50;
const FONT = "Lucida Console"

let wheelJSON;
let game;
let aaaa;

function preload() {
  wheelJSON = loadJSON("./wheel_EN.json");
}

function setup() {
  createCanvas(600, 600);
  ellipseMode(RADIUS);
  game = new Game(wheelJSON);
}

function draw() {
  background(50);
  game.show();
}

// function mousePressed() {
//   game.spin()
// }