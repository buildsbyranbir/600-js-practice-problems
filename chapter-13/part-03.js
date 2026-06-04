// ==========================
// Problem 1
// Array er sob number er jogfol ber koro reduce diye
// ==========================

const numbers = [5, 10, 15, 20, 25];

// sum er initial value 0
// prottek number sum er sathe add hobe
const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total); // Output: 75




// ==========================
// Problem 2
// Product gulo r mot price ber koro
// ==========================

const products = [
    { name: 'shampoo', price: 100 },
    { name: 'soap', price: 50 },
    { name: 'toothpaste', price: 75 }
];

// sum er sathe prottek product er price add kora hocche
const totalPrice = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log(totalPrice); // Output: 225






// ==========================
// Problem 3
// Product list er sob price jog koro
// ==========================

const productList = [
    { name: 'Pen', price: 5 },
    { name: 'Book', price: 50 },
    { name: 'Bag', price: 100 }
];

// prottek product er price add hocche
const totalPrice = productList.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log(totalPrice); // Output: 155




// ==========================
// Problem 4
// Array er sob number gun koro reduce diye
// ==========================

const numbers = [1, 2, 3, 4, 5];

// gun korar jonno initial value 1
const multiplication = numbers.reduce((result, num) => {
    return result * num;
}, 1);

console.log(multiplication); // Output: 120




// ==========================
// Problem 5
// Array theke sobcheye boro number ber koro
// ==========================

const numbers = [10, 20, 30, 40, 50];

// reduce diye max value khuja hocche
const maxNumber = numbers.reduce((max, num) => {
    return num > max ? num : max;
});

console.log(maxNumber); // Output: 50



// ==========================
// Problem 6
// Initial value 50 diye sob number er jogfol ber koro
// ==========================

const numbers = [100, 200, 300, 400];

// ekhane sum er shurur value 50
const total = numbers.reduce((sum, num) => {
    return sum + num;
}, 50);

console.log(total); // Output: 1050