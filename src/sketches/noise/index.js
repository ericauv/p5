const height = 1080;
const width = 1080;
let zOff = 0;
let zIncrement = 0.05;
let noiseMax = 1.5;
let ampMin = 30;
let ampMax = 500;

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(255);

  push();
    translate(width / 2, height / 2);
    textFont('Arial', 280, 800);
    textAlign(CENTER, CENTER);  
    StrokeNoFill();
    text('noise', 0, 0);
  pop();

  translate(width / 2, height / 2);

  push();
    const fillColor = color(map(noise(zOff), 0, 1, random(100,230), random(40,100)), map(noise(zOff), 0, 1, random(60), random(150)), map(noise(zOff), 0, 1, 30, 200), map(noise(zOff), 0, 1, 10, 200 ));
    fill(fillColor);
    
    let xOff;
    let yOff;
    noiseMax = 2;
    
    beginShape();

    for(let a = 0; a < TWO_PI; a+=0.001){
      xOff = map(cos(a), -1, 1, 0, noiseMax);
      yOff = map(sin(a), -1, 1, 0, noiseMax);
      
      const r = map(noise(xOff, yOff, zOff), 0, 1, ampMin, ampMax);
      
      const x = r * cos(a);
      const y = r * sin(a);

      vertex(x, y);
    }

    endShape(CLOSE);
  pop();

  zIncrement = 0.01;
  zOff += zIncrement;
}
