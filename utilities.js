
    // catch the input field and return valaue 
    function getInput(input){

        const inputField = document.getElementById(input);
    const valueString = inputField.value;
    const value = parseFloat(valueString);
    return value;

    }
    // catch the text field and return valaue 
    function getText(input){

        const textField = document.getElementById(input);
    const valueString = textField.innerText;
    const value = parseFloat(valueString);
    return value;

    }


    // catch the input field and update it
    function updateDisplay(idName,value){
        document.getElementById(idName).value=value;
    }
    
    // catch the text field and update it
    function updateTextDisplay(idName,value){
        document.getElementById(idName).innerText=value;
    }
    