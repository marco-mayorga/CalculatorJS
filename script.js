// TO-DO
    // Finish percentage button
    // Finsih keyboard functionality
    // Finish Negative num functionality


class Calculator
{
    constructor(topScreen, bottomScreen){
        this.topScreen = topScreen;
        this.bottomScreen = bottomScreen;
        this.clear();

    }
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    percent(){
        // TO-DO
    }
    sign(){}
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }
    appendNum(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }
    // Takes an operator and 2 numbers and then calls a
    // function on the numbers
    chooseOperation(operation){
        if (this.currentOperand === '') return
        if (this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';

    }
    compute(){
        let computation;
        const previousVariable = parseFloat(this.previousOperand);
        const currentVariable = parseFloat(this.currentOperand);
        if (isNaN(previousVariable) || isNaN(currentVariable)) return
        switch(this.operation){
            case '+':
                computation = previousVariable + currentVariable;
                break;
            case '-':
                computation = previousVariable - currentVariable;
                break;
            case '*':
                computation = previousVariable * currentVariable;
                break;
            case '/':
                if (currentVariable === 0){
                    computation =  'You Can\'t Divide By 0!'
                }else{
                    computation = previousVariable / currentVariable;
                }
                break;
            default:
                return
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }
    updateDisplay(){
        this.bottomScreen.innerHTML = this.currentOperand;
        if (this.operation != null){
            this.topScreen.innerHTML = `${this.previousOperand} ${this.operation}`
        } else{
            this.topScreen.innerHTML = '';
        }
    }
}


// Get Screens
const topScreen = document.querySelector('.previousOperand');
const bottomScreen = document.querySelector('.currentOperand');

// Get all buttons
// Equals button
const equal = document.getElementById('equal');
// All num buttons
let numberButtons = document.querySelectorAll('.number');
// All operatorButtons
let mathOperators = document.querySelectorAll('.mathOperators');
// All buttons
let allButtons = document.querySelectorAll('.button');
const AC = document.getElementById('AC');
const negative = document.getElementById('negative');
const percent = document.getElementById('percent');
const dot = document.getElementById('dot');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');


// New object
const calculator = new Calculator(topScreen, bottomScreen);

// Clears screen
AC.addEventListener('click', ()=>{
    calculator.clear();
    calculator.updateDisplay();
})

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNum(button.innerHTML);
        calculator.updateDisplay()
    })
})

mathOperators.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerHTML);
        calculator.updateDisplay()
    })
})

equal.addEventListener('click', ()=>{
    calculator.compute();
    calculator.updateDisplay();
})


// Adds button functionality
window.addEventListener('keydown', (event)=>{
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }
    switch (event.key){
        case 'Backspace':
            calculator.delete();
            calculator.updateDisplay();
// To-DO
            // case 'Enter':
        // case 'Add':
        // case 'Subtract':
        // case 'Multiply':
        // case 'Divide':
        default:
            return;
    }
})
