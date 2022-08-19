// catch the case plus button button 
document.getElementById("case-plus-btn").addEventListener("click",function(){

    // catch the case quantity field value
    const quantity = getInput("case-quantity-field");

    // catch the price
    const price = getText("case-price-field");

     // catch the subtotal field
     const subtotal = getText("subtotal");


     // catch the tax
     const tax = getText("tax");
 
     // catch the total
     const total = getText("total");

    // update quantity field value
    updateDisplay("case-quantity-field",quantity+1);


     // update price field
     const currentPrice=price+59;
     updateTextDisplay("case-price-field",currentPrice);

     // update subtotal field
    const currentSubtotalPrice=subtotal+59;
    updateTextDisplay("subtotal",currentSubtotalPrice);

    // update total field
    const currentTotalPrice=total+59;
    updateTextDisplay("total",currentTotalPrice);

})




// catch the case minus button button 
document.getElementById("case-minus-btn").addEventListener("click",function(){

    // catch the case quantity field value
    const quantity = getInput("case-quantity-field");


     // catch the price
     const price = getText("case-price-field");

      // catch the subtotal field
    const subtotal = getText("subtotal");


    // catch the tax
    const tax = getText("tax");

    // catch the total
    const total = getText("total");

      // update quantity field value
    updateDisplay("case-quantity-field",quantity-1);


     // update price field
     const currentPrice=price-59;
     updateTextDisplay("case-price-field",currentPrice);

      // update subtotal field
    const currentSubtotalPrice=subtotal-59;
    updateTextDisplay("subtotal",currentSubtotalPrice);

    // update total field
    const currentTotalPrice=total-59;
    updateTextDisplay("total",currentTotalPrice);

})