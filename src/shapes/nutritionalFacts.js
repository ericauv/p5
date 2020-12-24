
/**
 * 
 * 
 * @param {Object[]} ingredients Items to render in the table [{title: string, value: string}] 
 * @param {Number} x The x coordinate of the table
 * @param {Number} y The y coordinate of the table
 * @param {Number} gridX The width of a horizontal grid unit
 * @param {Number} gridY The width of a vertical grid unit
 * @param {Font} fontBold The font to use for the title (Default: Arial)
 * @param {Font} fontRegular The font to use for the items in the list (Default: Arial)
 */
function NutritionalFacts(ingredients = [{title:'title', value:'value'}], x = 0, y = 0, gridX = width / 9, gridY = height / 9, fontBold = 'Arial', fontRegular = 'Arial'){
    const setupLayoutVariables = () => {
      const subgridX = gridX / 3;
      const subgridY = gridY / 3;

      const rectCornerRadius = subgridX / 9;
      const titleFontSize = int(subgridX + subgridX / 9);
      

      // figure out the width of the Nutritional Facts title so we can determine content box width + padding
      textFont(fontBold, titleFontSize);
      textStyle(BOLD);
      const titleWidth = textWidth('Nutritional Facts');

      const getContentBoxWidth = () => {
        // want enough padding at sides of title / ingredients
        if((subgridX * 10 - titleWidth) < subgridX / 2){
          return subgridX * 11
        }
        return subgridX * 10;
      }
    
      const contentBoxWidth = getContentBoxWidth();
      const contentTitleBoxHeight = 2 * subgridY;

    
      // line up ingredient title/value with Nutritional Facts title
      const ingredientLineHorizontalPadding = (contentBoxWidth - titleWidth ) / 2;
      const ingredientTitleFontSize = int(titleFontSize / 3);
      const ingredientValueFontSize = int(ingredientTitleFontSize -  subgridX / 27);
      
      const ingredientLineHeight =  ingredientTitleFontSize * 2;
      const contentBoxHeight = (ingredients.length + 0.25) * ingredientLineHeight;

      return {
        contentBoxHeight,
        contentBoxWidth,
        contentTitleBoxHeight,
        ingredientLineHeight,
        ingredientLineHorizontalPadding,
        ingredientTitleFontSize,
        ingredientValueFontSize,
        rectCornerRadius,
        subgridX,
        subgridY,
        titleFontSize,
      }
    }

    const {
      contentBoxHeight,
      contentBoxWidth,
      contentTitleBoxHeight,
      ingredientLineHeight,
      ingredientLineHorizontalPadding,
      ingredientTitleFontSize,
      ingredientValueFontSize,
      rectCornerRadius,
      subgridX,
      subgridY,
      titleFontSize,
    } = setupLayoutVariables();

    const drawNutritionalFacts = () => {
      // Content Box
      push();
        fill(255);
        strokeWeight(3);
        stroke(0)
        rect(x, y, contentBoxWidth, contentBoxHeight + contentTitleBoxHeight, rectCornerRadius);
      pop();


      // Title Box
      fill(0);
      rect(x, y, contentBoxWidth, contentTitleBoxHeight, rectCornerRadius, rectCornerRadius, 0, 0);


      // Nutritional Facts title
      const titleX = x + contentBoxWidth / 2;
      const titleY = y + contentTitleBoxHeight / 2;
      
      push();
        fill(255);
        textAlign(CENTER, CENTER);
        textStyle(BOLD);
        textFont(fontBold, titleFontSize, 700);
        text('Nutritional Facts', titleX, titleY)
      pop();

      // Content Lines
      let ingredientX;
      let ingredientY;

      push();
      translate(x, y);
        ingredients.forEach((ingredient, index)=>{
          ingredientX = ingredientLineHorizontalPadding;
          ingredientY = contentTitleBoxHeight + (index + 1) * ingredientLineHeight;
          fill(0);
          textFont(fontRegular, ingredientTitleFontSize, 300);
          textAlign(LEFT, BOTTOM)
          text(ingredient.title, ingredientX, ingredientY);

          push();
            textFont(fontRegular, ingredientValueFontSize, 300);
            ingredientX = contentBoxWidth - ingredientLineHorizontalPadding;
            textAlign(RIGHT, BOTTOM)
            text(ingredient.value, ingredientX, ingredientY);
          pop();

          // only draw bottom border if not the last ingredient
          if(index !== ingredients.length - 1){
            line(0, ingredientY + 5, contentBoxWidth, ingredientY + 5)
          }

        });
      pop();
    }

    drawNutritionalFacts();
}