function setup() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    createCanvas(width, height);
    background(220);
    textFont('Arial', 12, 300);
    Grid();
  }
  
  function draw() {
      strokeWeight(100);
      stroke(0, 0, 255);

   if (mouseIsPressed) {
       var x = mouseX;
       var y = mouseY;
       var px = pmouseX;
       var py = pmouseY;
       line(px, py, x, y);
    }
}

function keyTyped() {
    push();
    fill(0,0,0);
    strokeWeight(1)
    text(key, 100, 100)
    pop();
}
