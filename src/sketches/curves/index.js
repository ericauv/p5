const height = 854;
const width = 854;

function setup() {
    createCanvas(width, height);
    background(255);
    strokeWeight(2);
    textFont('Arial', 10, 200);
    angleMode(RADIANS);
    fill(0,0,0,0);
    
}

function draw() {
    background(255);
    frameRate(5);
    push();
    translate(width/4, height/4);
    randomBezierTriangles();
    pop();
    push();
    translate(2* width/3, height/2);
    randomBezierTriangles();
    pop();
    push();
    textFont('Arial', 128, 800);
    push();
    random(2) > 1 ? StrokeNoFill() : fill(0);
    text('curves', round(random(1,3))*  width/9, round(random(1,9))*height/9);
    pop();
    pop();
}


function randomTriangles(){
    push();
    translate(width/2, height/2);
    
    const numIntervals = 3;
    const spacing = 360/numIntervals;
    beginShape();
    for(i=0; i < numIntervals; i++){
        // stroke(random(255),random(255),random(255));
        
        // translate(random(20), random(-100,100))
        fill(random(255),random(255),random(255), random(255));
        const radius = 100 + random(180)
        const x = cos(radians(i * spacing)) * radius;
        const y = sin(radians(i * spacing)) * radius;
        vertex(x,y);
    }
    endShape(CLOSE);
    pop();
}

function randomBezierTriangles(){
    
    const numIntervals = 2;
    const variance = width/4; 
    const spacing = 360/numIntervals;
    let x;
    let y;
    x=0;
    y=0;
    let vertices= [];
    beginShape();
    vertex(x,y);
    scale(1 + random(8)/10)
    for(i=0; i < numIntervals; i++){
        fill(random(255),random(255),random(255), random(150));
        const radius = 10+ random(width/10);
        const prevX = x;
        const prevY = y;
        const cp1X = prevX + random(-variance,variance);
        const cp1Y = prevY + random(-variance,variance);
        const cp2X = prevX + random(-variance,variance);
        const cp2Y = prevY + random(-variance,variance);
        x = cos(radians(i * spacing)) * radius;
        y = sin(radians(i * spacing)) * radius;
        bezierVertex(prevX, prevY, cp1X, cp1Y, cp2X, cp2Y, x, y);
        vertices.push({prevX, prevY, cp1X, cp1Y, cp2X, cp2Y, x, y});
    }
    endShape(CLOSE);
    push();
    fill(0,0,0)
    vertices.forEach(v =>{
        const textToPaint = '(' + Object.values(v).reduce((acc, current,index)=>acc+=`${index ? ', ' :''}${round(current)}`,'') + ')'
        translate(random(30),10+random(width/10));
        text(textToPaint, v.x, v.y)
    })
    pop();
}