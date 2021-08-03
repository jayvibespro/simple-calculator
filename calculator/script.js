alert('this is an online calculator');

class calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    clear() {
        this.previousOperandTextElement = '';
        this.currentOperandTextElement = '';
        this.operation = undefined;

    }
    delete() {

    }
    appendNumber(number) {
        this.currentOperand = number;

    }
    chooseOperation(operation) {

    }
    compute() {

    }
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;

    }
}


let numberButtons = document.querySelectorAll('[data-number]');
let operandButtons = document.querySelectorAll('[data-operation]');
let deleteButtons = document.querySelector('[data-delete]');
let allClearButtons = document.querySelector('[data-all-clear]');
let equalButtons = document.querySelector('[data-equals]');
let previousOperandTextElement = document.querySelector('[data-previous-operand]');
let currentOperandTextElement = document.querySelectorA('[data-current-operand]');

const calculator = new calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button,
    addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});