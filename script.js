let currentOperand = '';
let previousOperand = '';
let operation = undefined;

const currentOperandTextElement = document.getElementById('current-operand');
const previousOperandTextElement = document.getElementById('previous-operand');

function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  operation = undefined;
  updateDisplay();
}

function deleteNumber() {
  currentOperand = currentOperand.toString().slice(0, -1);
  updateDisplay();
}

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand = currentOperand.toString() + number.toString();
  updateDisplay();
}

function appendOperator(op) {
  if (currentOperand === '') return;
  if (previousOperand !== '') {
    calculate();
  }
  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
  updateDisplay();
}

function calculate() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '÷':
      if (current === 0) {
        alert("Tidak bisa membagi dengan nol!");
        return;
      }
      computation = prev / current;
      break;
    default:
      return;
  }

  currentOperand = computation;
  operation = undefined;
  previousOperand = '';
  updateDisplay();
}

function getDisplayNumber(number) {
  const stringNumber = number.toString();
  const integerDigits = parseFloat(stringNumber.split('.')[0]);
  const decimalDigits = stringNumber.split('.')[1];
  let integerDisplay;
  if (isNaN(integerDigits)) {
    integerDisplay = '';
  } else {
    integerDisplay = integerDigits.toLocaleString('id-ID', { maximumFractionDigits: 0 });
  }
  if (decimalDigits != null) {
    return `${integerDisplay},${decimalDigits}`;
  } else {
    return integerDisplay;
  }
}

function updateDisplay() {

  currentOperandTextElement.innerText = currentOperand;
  if (operation != null) {
    previousOperandTextElement.innerText = `${previousOperand} ${operation}`;
  } else {
    previousOperandTextElement.innerText = '';
  }
}


document.addEventListener('keydown', (event) => {
  if (event.key >= 0 && event.key <= 9) appendNumber(event.key);
  if (event.key === '.') appendNumber('.');
  if (event.key === '=' || event.key === 'Enter') calculate();
  if (event.key === 'Backspace') deleteNumber();
  if (event.key === 'Escape') clearDisplay();
  if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
    let op = event.key;
    if (op === '/') op = '÷';
    appendOperator(op);
  }
});
