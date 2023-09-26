const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator {
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    //add digit to calculator screen 
    addDigit(digit){

        ///check if current operation already has a dot
        if(digit ==="." && this.currentOperationText.innerText.includes(".")){
            return;
        }

        this.currentOperation = digit;
        this.updateScreen();
    }


    //process all calculator operations
    processOperation(operation){

        //check if the current value is empty
        if(this.currentOperationText.innerText===""){
            //change operation
            if(this.previousOperationText.innerText !== ""){
                this.changeOperation(operation);
            }
            return;
        }
        
        //get current and previous operation
        let operationValue;
        const previous = +this.previousOperationText.innerText.split(" ")[0];
        const current = +this.currentOperationText.innerText;

        switch(operation){
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
            case "-":
                operationValue = previous - current;
                this.updateScreen(operationValue, operation, current, previous);
            case "/":
                operationValue = previous / current;
                this.updateScreen(operationValue, operation, current, previous);
            case "*":
                operationValue = previous * current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            default:
                return;
        }
    }

    //change values of the calculator screen
    updateScreen(
        operationValue = null, 
        operation = null,
        current = null, 
        previous = null 
        ){
        
        if(operationValue === null){
            this.currentOperationText.innerText += this.currentOperation;
        } else{

            if(previous === 0){
                operationValue = current;
            }
            //add current value to previus
            this.previousOperationText.innerText = `${operationValue} ${operation}`;
            this.currentOperationText.innerText = "";

        }

    }
    //change math operations 
    changeOperation(operation){
        const mathOperations = ["+","-", "*", "/"];

        if(!mathOperations.includes(operation)){
            return;
        }

        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
    }
}


const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) =>{
    btn.addEventListener("click", (e)=>{
    const value = e.target.innerText;

    if(+value >= 0 || value ==="."){
        calc.addDigit(value);
    }else{
    calc.processOperation(value)
    }
 })
    
})

