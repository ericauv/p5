function TextFillScreen(str = 'text', alternateInterval = 0, alternateStyle = () => null, ){
    textAlign(CENTER,TOP);
    size = textSize()
    intervals = height / (size);
    for(let i=0; i< intervals; i++){
        if(alternateInterval && i % alternateInterval === 0){
            push();
            alternateStyle();
            text(str, width / 2, i * height / intervals);
            pop();
        }else{
            text(str, width / 2, i * height / intervals);
        }
    }
}