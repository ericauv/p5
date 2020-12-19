
function overlapRectangle(x1, y1, w1, h1, x2, y2, w2, h2, mode = 'bool'){
    const firstXGood = x1 >= (x2 + w2);
    const firstYGood = y1 >= (y2 + h2);
    const secondXGood = x2 >= (x1 + w1);
    const secondYGood = y2 >= (y1 + h1);
    
    if(mode === 'bool'){
      return !(firstXGood || firstYGood || secondXGood || secondYGood);
    }else{
      if(!(firstXGood || secondXGood)){
        return 'x'
      }else if(!(firstYGood || secondYGood)){
        return 'y'
      }
      return null;
    }
  }
  
  function getRectangle(vertexX, vertexY, gridX, gridY, rectangles = []){
    let rectWidth = gridX * round(random(1, gridCountX));
    let rectHeight = gridY * round(random(1, gridCountY));
  
    // don't allow rectangle to go outside canvas x bound
    while(vertexX + rectWidth > width){
      rectWidth -= gridX;
    }
    
    // don't allow rectangle to go outside canvas y bound
    while(vertexY + rectHeight > height){
      rectHeight -= gridY;
    }
  
    // don't allow rectangle to overlap another rectanle
    rectangles.forEach((current) => {
      let badWidth = overlapRectangle(current.x, current.y, current.w, current.h, vertexX, vertexY, rectWidth, rectHeight, 'non-boolean') === 'x'; 
      let badHeight = overlapRectangle(current.x, current.y, current.w, current.h, vertexX, vertexY, rectWidth, rectHeight, 'non-boolean') === 'y';
      while(rectWidth > 0 && rectHeight > 0 && (badWidth && badHeight)){
        if(badWidth){
          rectWidth -= gridX;
        }else{
          rectHeight -= gridY;
        }
      }
    });
  
    // don't return a rectangle if no rectangle was possible using this vertex
    if(rectWidth === 0 || rectHeight === 0){
      return null;
    }
  
    return {
      x: vertexX, 
      y: vertexY, 
      w: rectWidth, 
      h: rectHeight
    }
  }
  
  function getNonOriginVerticesRectangle({x, y, w, h}){
    // return the rectangle's vertices other than the origin vertex
    return [
      {x: x + w, y},
      {x: x + w, y: y + h},
      {x, y: y + h},
    ]
  }
  
  function GetNonOverlappingRectangles(gridX, gridY){
    const availableVertices = [{x: 0, y:0}];
    rectangles = [];
  
    while(availableVertices.length){
  
      const vertexX = availableVertices[availableVertices.length - 1].x;
      const vertexY = availableVertices[availableVertices.length - 1].y;
      
      const newRectangle = getRectangle(vertexX, vertexY, gridX, gridY, rectangles);
  
      // remove current vertex from available vertices, now that we have gotten its rectangle
      availableVertices.pop();
  
      if(newRectangle){
        // push the rectangles vertices to the available vertices if a rectangle was possible
        availableVertices.push(...getNonOriginVerticesRectangle(newRectangle));
        rectangles.push(newRectangle);
      }
    }
  
    return rectangles
  }