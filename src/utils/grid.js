function Grid(gridIntervalHorizontal = 10, gridIntervalVertical = 10){
    const height = window.innerHeight;
    const width = window.innerWidth;
    
    const verticalLineCount = width / gridIntervalVertical;
    const horizontalLineCount = height / gridIntervalHorizontal;
    
    push();

    fill(0,0,0);
    const strokeColor = color(0,0,0);
    strokeColor.setAlpha(25);
    stroke(strokeColor);
    strokeWeight(1);
    
    // vertical lines
    for(let i = 0; i <= verticalLineCount; i++){
        push();

        // more opaque lines
        if((i % gridIntervalVertical) === 0){

            // gradation marker: x position string, centered on line, 10 pixels from top 
            text(i * gridIntervalVertical, i * gridIntervalVertical - 10, 10)
            strokeColor.setAlpha(75);
            stroke(strokeColor);
        }
        
        line(i * gridIntervalVertical, 0, i * gridIntervalVertical, height);
        
        pop();
        
    }
    
    // horizontal lines
    for(let i = 0; i <= horizontalLineCount; i++){
        push();
        
        // more opaque lines
        if((i % gridIntervalHorizontal)===0){
            // gradation marker: y position string, centered on line, 10 pixels from left 
            text(i * gridIntervalHorizontal, 10, i * gridIntervalHorizontal + 5)
            strokeColor.setAlpha(75);
            stroke(strokeColor);
        }

        line(0, i * gridIntervalHorizontal, width, i * gridIntervalHorizontal);

        pop();
    }

    pop();
}