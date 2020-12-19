let height;
let width;

function setup() {
    height = 1080;
    width = 1080;
    createCanvas(width, height);
}

function draw() {
  background(255);
  translate(width / 2, height /2);
  text('index.js', 0, 0);
}
