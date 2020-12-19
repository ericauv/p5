let height;
let width;

let tileCountX;
let tileCountY;
let tileWidth;
let tileHeight;
let s;
let t;
let framesPerCycle;
let framesPerPause;
let shouldPause;
let pg;

let img;

function preload(){
  img = loadImage('data/testTaiwan.jpg')
}

function setup() {
  t = 0;
  height = 1080;
  width = 1080;
  framesPerCycle = 240;
  framesPerPause = 2;
  tileCountX = 12;
  tileCountY = 12;
  shouldPause = false

  createCanvas(width, height);
  tileWidth = width / tileCountX;
  tileHeight = height / tileCountY;

  s = 'phase'
  pg = createGraphics(width, height);
}
  
  function draw() { 
    pg.background(255);
    t += 2 * PI / (framesPerCycle);

    // draw initial string canvas
    background(255);
    fill(80, 120, 220);
    textFont("Arial", 400, 800);
    image(img, width-img.width, height-img.height, img.width/(3/2), img.height/(3/2))
    push();
    translate(width / 2, height / 2);
    // imageMode(CENTER)
      textAlign(CENTER, CENTER);
      text(s, 0, 0);
    pop();
 
    // shift string on offscreen canvas
    for(let x = 0; x < tileCountX; x++){
      for(let y = 0; y < tileCountY; y++){
        const tileX = x * tileWidth;
        const tileY = y * tileWidth;
        const imageTile = get(tileX + sin(x * t) * tileWidth, tileY + cos(y * t) * tileHeight, tileWidth, tileHeight);
        pg.image(imageTile, tileX, tileY, tileWidth, tileHeight);
      }
    }

    background(255);

    // paste final image to original canvas
    image(pg, 0, 0)
}