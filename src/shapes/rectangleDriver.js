/**
 * 
 * @param {number} w The width of the rectangle (default: width / 27)
 * @param {number} h The height of the rectangle (default: height / 27)
 * @param {*} period How many timer units a single cycle takes
 * @param {*} timer The timer to use
 * @param {*} rowJump How many rows (rectangle heights) the rectangles should move down each cycle
 */
function rectangleDriver(w = width / 27, h = height / 27, period = 1000, timer = 0, rowJump = 1) {
    const maxCycleCount = int(height / h);
    
    /**
     * 
     * @param {number} offset how much to add to the currentCycle before calculating currentCycle % maxCycleCount
     */
    const getCycleCounter = (offset = 0) => {
      /* get cycleCounter as the # of cycles that have passed since the start, 
      resetting to 0 once the y translation has gone off screen */
     return ((int(timer / period) + offset) * rowJump) % maxCycleCount;
    }
  
    // get the values for the first (original) rectangle
    const cycleTime = (timer % period);
    const xTranslate = cycleTime * width / period;
    rect(xTranslate, getCycleCounter() * h, w, h);
  
    // if the rectangle is going past the edge of the screen, begin drawing the next line's rectangle
    if(xTranslate + w > width){
      const nextXTranslate = cycleTime - period;
      rect(nextXTranslate, getCycleCounter(1) * h, w, h);
    }
  }