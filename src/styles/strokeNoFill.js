/**
 * Applies no fill style with a stroke with passed color and weight
 * @param {Object} _strokeColor - The color that the stroke should be. Default: color(0,0,0) [black].
 * @param {string} _strokeWeight - The weight that the stroke should have. Default: 1.
 */
function StrokeNoFill(_strokeColor, _strokeWeight = 1){
    // set fill to transparent
    const fillColor = color(0,0,0);
    fillColor.setAlpha(0);
    fill(fillColor);

    // set stroke styles
    strokeWeight(_strokeWeight);
    stroke(_strokeColor ? _strokeColor : color(0,0,0))
}