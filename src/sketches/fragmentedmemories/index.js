
let gridCountX;
let gridCountY;
let w;
let h;
let imgs = [];
let numberOfImages = 184;


function preload(){
  for(let i = 1; i <= numberOfImages; i++){
    imgs[i-1] = loadImage(`data/img${i}.jpg`);
  }
}

function setup() {
    canvasHeight = 720;
    canvasWidth = 720;
    frameRate(10);

    gridCountX = 6;
    gridCountY = 6;

    gridX = canvasWidth / gridCountX;
    gridY = canvasHeight / gridCountY
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  const rectangles = GetNonOverlappingRectangles(gridX, gridY);
  rectangles.forEach((rectangle, index) => {
  fill(noise(random(1) + frameCount) * 255, noise(random(1) + frameCount) * 255, noise(random(1) + frameCount) * 255, 10);
    const {x, y, w, h} = rectangle;
    const imgIndex = round(random(1, numberOfImages-1))
    console.log(imgIndex);
    image(imgs[imgIndex], x, y, w, h, 0, 0, w, h);
    rect(x, y, w, h);
  });
}



