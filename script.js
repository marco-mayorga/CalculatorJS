// getting Screens
const topScreen = document.querySelector(".topHalfOfScreen");
const bottomScreen = document.querySelector(".bottomHalfOfScreen");

// Getting all buttons
const AC = document.getElementById("AC");
const C = document.getElementById("C");
const percent = document.getElementById("percent");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const equal = document.getElementById("equal");
const dot = document.getElementById("dot");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const zero = document.getElementById("zero");

// all num buttons
let numberButtons = document.querySelectorAll(".number");

// all operatorButtons
let mathOperators = document.querySelectorAll(".mathOperators");

// All buttons
let allButtons = document.querySelectorAll(".button");

// topScreen innerItems
let buttonArray = [];


// adding all buttons to top screen and buttonArray when clicked
allButtons.forEach(button =>{
    button.addEventListener("click", ()=>{
        populateTopScreen(button.innerHTML);
    });
})

numberButtons.forEach(button => {
    button.addEventListener("onkeypress", ()=>{
        button.
    })
})



// Populating Top Screen
function populateTopScreen(buttonPressed) {
        buttonArray.push(buttonPressed);
        topScreen.innerHTML = buttonArray.join("");
        num1Andnum2 = topScreen.innerHTML.split(/[\+\-X\/]/);
        num1 = num1Andnum2[0];
        num2 = num1Andnum2[1];
        // calls operate after = is pressed
        equal.addEventListener("click", ()=>{

            bottomScreen.innerHTML = operate(...buttonArray);
        })
};

// Multiplication Func
function multiplicationFunc (Num1, Num2){
    return Num1 * Num2;
};

// Addition Func
function additionFunc (Num1, Num2){
    return Num1 + Num2;
    
};

// Subtraction Func
function subtractionFunc (Num1, Num2){
    return Num1 - Num2;
};

// Division Func
function divisionFunc (Num1, Num2){
    quotient = Num1 / Num2;
    if (Num2 === 0){
        bottomScreen.innerHTML = "You cant divide by 0";
    }
    return quotient;
};

// Takes an operator and 2 numbers and then calls a
// function on the numbers
function operate (Num1, operator, Num2) {
    switch (operator) {
        case "+":
            return additionFunc(Num1, Num2);
        case "-":
           return subtractionFunc(Num1, Num2);
        case "/":
            return divisionFunc(Num1, Num2);
        case "X":
            return multiplicationFunc(Num1, Num2);
    }
}

// Clear Screen
AC.addEventListener("click", ()=>{
    topScreen.innerHTML = "";
    bottomScreen.innerHTML = "";
    buttonArray = [];
})

C.addEventListener("click", ()=> {
    topScreen.innerHTML.slice(0, -1);
})