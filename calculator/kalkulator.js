console.log("bisa ga ges")
const calculator = {
  displayNumber: "0",
  operator: null,
  firstNumber: null,
  waitingForSecondNumber: false,
};
function coba(){
  
}
function updateDisplay() {
  document.querySelector('#displayNumber').innerHTML = calculator.displayNumber
  
}

function clearCalculator() {
  calculator.displayNumber = "0";
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
  if (calculator.displayNumber === '0') {
    calculator.displayNumber = digit;
  }else{
    calculator.displayNumber += digit;
  }
}
const buttons = document.querySelectorAll(".button")

for (let button of buttons) {
  button.addEventListener('click',function (event) {
    
    const target = event.target
    
    if(target.class) {
      clearCalculator();
      updateDisplay();
      return;
  }

    inputDigit(target.textContent)
    updateDisplay()
  })
}