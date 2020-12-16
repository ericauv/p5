const height = 1080;
const width = 1080;
let isCapturing = false;
const format = 'png'
const framerate = 60;

// how long to capture for (maximum)
const timeLimit = 10;

// how often to save capture
const autoSaveTime = timeLimit;

// set up CCapture, make sure to add the following to index.html
// <script src="node_modules/ccapture.js/build/CCapture.all.min.js"></script>

const capturer = new CCapture({
    verbose: true,
    format,
    framerate,
    timeLimit,
    autoSaveTime,
});

function setup() {
  createCanvas(width, height);
 
}

function draw() {
  if(!isCapturing) {
    capturer.start();
    isCapturing = true;
  }
  
  // draw code goes here

  capturer.capture(document.getElementById('defaultCanvas0'));
}
