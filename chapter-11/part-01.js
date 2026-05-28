// Problem 1
function addNumbers(a = 0, b = 0, c = 0) {
    return a + b + c;
}

console.log(addNumbers(10, 20, 30));
console.log(addNumbers());



// Problem 2
function deposit(amount = 50) {
    return `Joma hoise: ${amount} taka`;
}

console.log(deposit(200));
console.log(deposit());



// Problem 3
function userInfo(name = "anonymous", income = 0) {
    return `Name: ${name}, Income: ${income}`;
}

console.log(userInfo("Rahim", 25000));
console.log(userInfo());



// Problem 4
function square(num = 1) {
    return num * num;
}

console.log(square(5));
console.log(square());



// Problem 5
function productInfo(product = "Unknown product", price = 1) {
    return `Product: ${product}, Price: ${price}`;
}

console.log(productInfo("Laptop", 50000));
console.log(productInfo());



// Problem 6
function favoriteBooks(books = ["JS book"]) {
    return books;
}

console.log(favoriteBooks(["HTML", "CSS", "JS"]));
console.log(favoriteBooks());



// Problem 7
function totalPrice({ price = 10, quantity = 1 } = {}) {
    return price * quantity;
}

console.log(totalPrice({ price: 100, quantity: 2 }));
console.log(totalPrice());



// Problem 8
function multiplyByTwo(numbers = [5, 10, 15]) {
    return numbers.map(num => num * 2);
}

console.log(multiplyByTwo([1, 2, 3]));
console.log(multiplyByTwo());



// Problem 9
function simpleInterest({ principal = 1000, rate = 5 } = {}) {
    return (principal * rate) / 100;
}

console.log(simpleInterest({ principal: 2000, rate: 10 }));
console.log(simpleInterest());



// Problem 10
function salaryAfterTax({ salary = 50000, tax = 10 } = {}) {

    const taxAmount = (salary * tax) / 100;

    const finalSalary = salary - taxAmount;

    return finalSalary;
}

console.log(salaryAfterTax({ salary: 60000, tax: 15 }));
console.log(salaryAfterTax());