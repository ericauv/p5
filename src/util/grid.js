function Grid(){
    const height = window.innerHeight;
    const width = window.innerWidth;
    
    const xLineCount = width / 10;
    const yLineCount = height / 10;
    
    push();
    fill(0,0,0);
    const strokeColor = color(0,0,0);
    strokeColor.setAlpha(25);
    stroke(strokeColor);
    strokeWeight(1);
    
    for(let i = 0; i<=xLineCount; i++){
        push();
        if((i%10)===0){
            text(i*10, i*10-10, 10)
            strokeColor.setAlpha(75);
            stroke(strokeColor);
        }

        line(i*10,0,i*10,height);

        pop();

    }

    for(let i = 0; i<=yLineCount; i++){
        push();
        if((i%10)===0){
            text(i*10, 10, i*10+5)
            strokeColor.setAlpha(75);
            stroke(strokeColor);
        }
        line(0,i*10,width,i*10);            
        pop();

    }
    pop();
}