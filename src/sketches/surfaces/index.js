function setup() {
    height = window.innerHeight;
    width = window.innerWidth;
    createCanvas(width, height);
  }
  
  function draw() {
    
    background(220);
    Grid();
    push();
    noFill()
    beginShape();
      strokeWeight(2);
      bezier(30,45,100,300,62,97,642,300);
      bezier(30,45,100,300,62,97,648,350);
      bezier(300,450,1000,1500,602,540,1030,200);
      translate(0,-100);
      bezier(300,450,1000,1500,602,540,1030,200);
      translate(0,-100);
      bezier(300,450,1000,1500,602,540,1030,200);
      translate(0,-100);
      bezier(300,450,1000,1500,602,540,1030,200);
      translate(0,-100);
      bezier(300,450,1000,1500,602,540,1030,200);
      translate(0,-100);
      bezier(300,450,1000,1500,602,540,1030,200);
    endShape()
    pop();
    
  
  
    push();
    bigText('SURFACES');
    translate(0,100);
    fill(255,204,0);
    bigText('SURFACES');
    translate(0,100);
    push();
    StrokeNoFill();
  
    bigText('SURFACES');
    pop();
    translate(0,100);
    bigText('SURFACES');
    pop();
  
    codeText();
    // textFont('Helvetica', 256, 700);
    // text('hey',256,400);
  }
  
  
  function bigText (str="bigText") {
    textFont('Helvetica', 128, 700);
    text(str,200,425)
  }
  
  function codeText(){
    
    textFont('Helvetica', 12, 300);
  
    const str = `function setup() {
      height = window.innerHeight;
      width = window.innerWidth;
      createCanvas(width, height);
    }
    
    function draw() {
      
      background(220);
      Grid();
      push();
      noFill()
      beginShape();
        strokeWeight(2);
        bezier(30,45,100,300,62,97,642,300);
        bezier(30,45,100,300,62,97,648,350);
        bezier(300,450,1000,1500,602,540,1030,200);
        translate(0,-100);
        bezier(300,450,1000,1500,602,540,1030,200);
        translate(0,-100);
        bezier(300,450,1000,1500,602,540,1030,200);
        translate(0,-100);
        bezier(300,450,1000,1500,602,540,1030,200);
        translate(0,-100);
        bezier(300,450,1000,1500,602,540,1030,200);
        translate(0,-100);
        bezier(300,450,1000,1500,602,540,1030,200);
      endShape()
      pop();
      
    
    
      push();
      bigText('SURFACES');
      translate(0,100);
      fill(255,204,0);
      bigText('SURFACES');
      translate(0,100);
      push();
      StrokeNoFill();
    
      bigText('SURFACES');
      pop();
      translate(0,100);
      bigText('SURFACES');
      pop();
    
      // codeText();
      // textFont('Helvetica', 256, 700);
      // text('hey',256,400);
    }
    
    
    function bigText (str="bigText") {
      textFont('Helvetica', 128, 700);
      text(str,200,425)
    }
    
    function codeText(){
      
      textFont('Helvetica', 12, 300);
    
      text(str,20,20)
    }`
  
    text(str,20,20)
  }