/**
 * upto 100: ---> price is 100 per
 * more than 101 - 200: --> 90 per
 * more than 200: price is 70 per
 */

function discountedPrice(quantity) {
    if (quantity <= 100) {
        const total = quantity * 100;
        return total;
    }
    else if (quantity <= 200) {
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity * 70;
        return total;
    }
}

const total = discountedPrice(5);
console.log(total)