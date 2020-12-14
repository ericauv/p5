function RandomBezierShape(intervalCount = 2, withText = false){
  const variance = width/4; 
  const spacing = 360/intervalCount;
  let x;
  let y;
  x=0;
  y=0;
  let vertices= [];
  beginShape();
  vertex(x,y);
  scale(1 + random(8)/10)
  for(i=0; i < intervalCount; i++){
      fill(random(255),random(255),random(255), random(150));
      const radius = 10 + random(width/10);
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

  if(withText){  
    push();
    fill(0,0,0)
    vertices.forEach(v =>{
      const textToPaint = '(' + Object.values(v).reduce((acc, current,index)=>acc+=`${index ? ', ' :''}${round(current)}`,'') + ')'
      translate(random(30),10+random(width/10));
      text(textToPaint, v.x, v.y)
    })
    pop();
  }
}
