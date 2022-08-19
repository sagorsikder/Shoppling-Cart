// catch the black plus button button 
document.getElementById("black-plus-btn").addEventListener("click",function(){

    // catch the black quantity field value
    const quantity = getInput("black-quantity-field");

    // catch the price
    const price = getText("black-price-field");

    // catch the subtotal field
    const subtotal = getText("subtotal");


    // catch the tax
    const tax = getText("tax");

    // catch the total
    const total = getText("total");

    // update quantity field value
    updateDisplay("black-quantity-field",quantity+1);

    // update price field
    const currentPrice=price+1219;
    updateTextDisplay("black-price-field",currentPrice);

    // update subtotal field
    const currentSubtotalPrice=subtotal+1219;
    updateTextDisplay("subtotal",currentSubtotalPrice);

    // update total field
    const currentTotalPrice=total+1219;
    updateTextDisplay("total",currentTotalPrice);

})
















// catch the black minus button button 
document.getElementById("black-minus-btn").addEventListener("click",function(){

    // catch the black quantity field value
    const quantity = getInput("black-quantity-field");
    
    // catch the price
    const price = getText("black-price-field");

    // catch the subtotal field
    const subtotal = getText("subtotal");

    // catch the tax
    const tax = getText("tax");

    // catch the total
    const total = getText("total");

    // update quantity field value
    updateDisplay("black-quantity-field",quantity-1);

     // update price field
     const currentPrice=price-1219;
     updateTextDisplay("black-price-field",currentPrice);

      // update subtotal field
    const currentSubtotalPrice=subtotal-1219;
    updateTextDisplay("subtotal",currentSubtotalPrice);

    // update total field
    const currentTotalPrice=total-1219;
    updateTextDisplay("total",currentTotalPrice);

})