function calculate(value) {
    const expression = /\+|\-|\*|\//;
    const numbers = value.split(expression)
    const numberA = Number(numbers[0])
    const numberB = Number(numbers[1])
    const operator = value.match(expression) || null
    // debugger
    if (Number.isNaN(numberA) || Number.isNaN(numberB) || operator === null) {
        updateResult('Operator does not recognized')
    }
    else {
        const calculator = new Calculator();
        calculator.add(numberA)
        let result;
        switch (operator[0]) {
            case '+':
                result = calculator.add(numberB)
                break;
            case '-':
                result = calculator.subtract(numberB)
                break;
            case '*':
                result = calculator.multiply(numberB)
                break;
            case '/':
                result = calculator.divide(numberB)
                break;
            // default:
            // result = 'Operator does not recognized'
            // break;
        }
        updateResult(result);
    }
}

function updateResult(result) {
    const element = document.getElementById('result')
    if (element) {
        element.innerText = result
    }
}