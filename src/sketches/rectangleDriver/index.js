let height;
let width;

let cycleCount;
const fillsArray = [];
let period = 1000;

function setup() {
    cycleCount = 0;  
    height = 1080;
    width = 1080;
    createCanvas(width, height);
    for(let i = 0; i < 9; i++){
      fillsArray[i] = {color: color(random(20, 140), random(10,120), random(100,150)), timerOffset: int(random(1,i)) * random(1, i) * period, rowJump: int(random(1,4))};
    }
}

function draw() {
  background(255);
  push();
  fill(0);
  stroke(0)
  text('index.js', 0, 0);
  const timer = millis();

  rectangleDriver(width / 2, undefined, undefined, timer, 2);
  pop();
  for(let i=0; i < 9; i++){
      rectangleDriver(width / 9, undefined, period, timer + period * i + period / sin(i), 2)
    }
}
