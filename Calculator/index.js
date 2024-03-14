let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operation = null;

function appendNumber(number) {
  currentNumber += number;
  display.value = currentNumber;
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operation = null;
  display.value = '';
}

function performOperation(op) {
  if (currentNumber === '') return;
  if (previousNumber !== '') calculateResult();
  operation = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculateResult() {
  let result = 0;
  const prev = parseFloat(previousNumber);
  const curr = parseFloat(currentNumber);
  if (isNaN(prev) || isNaN(curr)) return;
  switch(operation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
    case '/':
      if(curr == 0){
        alert("Cannot divide by zero");
        return;
      }
      result = prev / curr;
      break;
  }
  display.value = result;
  currentNumber = result.toString();
  previousNumber = '';
  operation = null;
}