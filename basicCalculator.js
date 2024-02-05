function add(num1, num2) {
    return num1 + num2;
}

function subtrasct(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// calculator
function calculator(a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if (operation === 'subtrasct') {
        return subtrasct(a, b);
    }
    else if (operation === 'multiply') {
        return multiply(a, b);
    }
    else if (operation === 'divide') {
        return divide(a, b);
    }
    else {
        return "Only 'Add', 'Subtract', 'Multiply', 'Divide' operations are allowed."
    }
}

const result = calculator(15, 50, 'multiply');
console.log(result);