const phones = [
    { name: 'samsung', price: 20000, camera: '12mp', color: 'white' },
    { name: 'xiaomi', price: 18000, camera: '12mp', color: 'black' },
    { name: 'oppo', price: 30000, camera: '12mp', color: 'green' },
    { name: 'iphone', price: 100000, camera: '12mp', color: 'blue' },
    { name: 'walton', price: 31000, camera: '12mp', color: 'black' },
    { name: 'htc', price: 27000, camera: '12mp', color: 'golden' }
]

function getCheapestPhone(phones) {
    let min = phones[0];
    for (const phone of phones) {
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapestPhone(phones);
console.log('cheapest phone is: ', cheap);