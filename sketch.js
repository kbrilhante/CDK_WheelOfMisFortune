let wheelJSON;

function preload() {
  wheelJSON = loadJSON("./wheel_EN.json");
}

function setup() {
  createCanvas(600, 600);
  ellipseMode(RADIUS);
  console.log(wheelJSON);
  background(50);
  const ws = new WheelSegment(300, 300, 300, 'yellow', 0, PI * 0.5);
  ws.show();
}

function draw() {}