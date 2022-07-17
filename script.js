// getting Screens
const topScreen = document.querySelector(".topHalfOfScreen")
const bottomScreen = document.querySelector(".bottomHalfOfScreen")

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

// Getting All Numbers at once
let numberButtons = document.querySelectorAll(".number")
numberButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        populateTopScreen(button.value)
    });
})

// Populating Top Screen
let buttonArray = []
function populateTopScreen (buttonPressed) {
    buttonArray.push(buttonPressed)
    topScreen.innerHTML = buttonArray.join("")
};

// Populate bottom screen
















// Takes an operator and 2 numbers and then calls a
// function on the numbers



// Addition Func
add.addEventListener("click", () =>{
    populateTopScreen(add.innerHTML)
});
function additionFunc (numbers){
    if (numbers.length === 0) {
        return 0;
    } else {
        sum = numbers.reduce((firstNum, secondNum) => {
            return firstNum + secondNum
        });
        return sum
    }
};

// Subtraction Func
subtract.addEventListener("click", () =>{
    populateTopScreen(subtract.innerHTML)
});
function subtractionFunc (numbers){
    if (numbers.length === 0) {
        return 0;
    } else {
        sum = numbers.reduce((firstNum, secondNum) => {
            return firstNum - secondNum
        });
        return sum
    }
};

// Division Func
divide.addEventListener("click", () =>{
    populateTopScreen(divide.innerHTML)
});
function divisionFunc (numbers){
    if (numbers.length === 0) {
        return 0;
    } else {
        sum = numbers.reduce((firstNum, secondNum) => {
            return firstNum / secondNum
        });
        return sum
    }
};

// Multiplication Func
multiply.addEventListener("click", () =>{
    populateTopScreen(multiply.innerHTML)
});
function multiplicationFunc (numbers){
    if (numbers.length === 0) {
        return 0;
    } else {
        sum = numbers.reduce((firstNum, secondNum) => {
            return firstNum * secondNum
        });
        return sum
    }
};

// Clear Screen
AC.addEventListener("click", ()=>{
    topScreen.innerHTML = ""
    bottomScreen.innerHTML = ""
    buttonArray = []
})
