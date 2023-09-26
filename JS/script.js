const previusOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator {
    constructor(previusOperationText, currentOperationText){
        this.previusOperationText = previusOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    //add digit to calculator screen 
    addDigit(digit){
        this.currentOperation = digit;
        this.updateScreen()
    }

    //change values of the calculator screen
    updateScreen(){
        this.currentOperationText.innerText += this.currentOperation;
    }
}



const calc = new Calculator(previusOperationText, currentOperationText);

buttons.forEach((btn) =>{
    btn.addEventListener("click", (e)=>{
    const value = e.target.innerText;

    if(+value >= 0 || value ==="."){
        calc.addDigit(value);
    }else{
        console.log("Operação "+ value)
    }
 })
    
})

