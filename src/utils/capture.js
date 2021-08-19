/* add the following to index.html
* <script src="node_modules/ccapture.js/build/CCapture.all.min.js"></script>
*/

/* ffmpeg command when in folder that contains the png sequence
* ffmpeg -r 60 -f image2 -i "%07d.png" -vcodec libx264 -crf 17 -pix_fmt yuv420p -vf scale=1080x1080 output.mp4 
*/

const height = 1080;
const width = 1080;
let isCapturing = false;
const format = 'png'
const framerate = 60;

// how long to capture for (maximum)
const timeLimit = 30;

// how often to save capture
const autoSaveTime = timeLimit;

// set up CCapture, make sure to add the following to index.html
const capturer = new CCapture({
    verbose: true,
    format,
    framerate,
    timeLimit,
    autoSaveTime,
});

// add global variables for sketch here






// preload for sketch goes here

function setup() {
  // setup for sketch goes here


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
