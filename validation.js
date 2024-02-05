function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply(5, 'seven');
// console.log(result);

function fullName(first, second) {
    if (typeof first !== 'string') {
        return 'Put first name as string';
    }
    else if (typeof second !== 'string') {
        return 'Put second name as string';
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName('Ash', 'Farhad');
console.log(full);


function getSecond(numbers) {
    if (Array.isArray(numbers) === false) {
        return 'Please provide an array'
    }
    const second = numbers[1];
    return second;
}

const second = getSecond([45, 33, 4, 5])
console.log(second)