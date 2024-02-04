const tallest = [65, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const max = getMax(tallest);
console.log('tallest value in inch is: ', max);

// finding the min number

const shortest = [44, 50, 78, 62, 42, 33, 56, 77];

function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

const min = getMin(shortest);
console.log('shortest value in inch is: ', min);