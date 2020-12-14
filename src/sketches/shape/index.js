const height = window.innerHeight;
const width = window.innerWidth;

function setup() {
    frameRate(6)
    createCanvas(width, height);
  }
  
  function draw() {
    background(255);


    textFont('Arial', 200, 800)
    textAlign(CENTER,CENTER);
    StrokeNoFill();
    
    function alternateStyle(){
      fill(0);
    }
    // text('shape', width / 2, height / 2);
    TextFillScreen('shape', 2, alternateStyle);

    push();
    translate(width / 2, height / 2);
    RandomBezierShape(2);
    scale(2);
    pop();
    push();
    translate(width / 2, height / 4);
    RandomBezierShape(2);
    pop();
    push();
    translate(width / 2, 3 * height / 4);
    RandomBezierShape(2);
    pop();
  }
  

