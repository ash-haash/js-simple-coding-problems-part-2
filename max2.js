const jim = 98;
const tim = 89;
const kim = 68;

if (jim > tim && jim > kim) {
    console.log('Jim is the ultimate boss');
}
else if (tim > jim && tim > kim) {
    console.log('Tim is the boss');
}
else {
    console.log('Kim is the Kardashians boss')
}

// using function 

function getMax(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}

const maxNumber = getMax(100, 250, 50);
console.log('The maximum number is: ', maxNumber);

// using Math.max inbuilt function

const max = Math.max(45, 6, 232, 545, 3, 54, 21);
console.log('max number using Math.max function is: ', max);