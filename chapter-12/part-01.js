// Problem 1
const product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
};

const { brand } = product;

console.log(brand);



// Problem 2
const item = {
    name: "Mobile",
    price: 20000,
    phone: "Samsung"
};

const { phone, price } = item;

console.log(phone);
console.log(price);




// Problem 3
const colors = ["red", "blue", "green", "yellow"];

const [first, second] = colors;

console.log(first);
console.log(second);




// Problem 4
const numbers = [10, 20, 30];

const [, second] = numbers;

console.log(second);




// Problem 5
const digits = [2, 4, 6, 8];

const [two, , , eight] = digits;

console.log(two);
console.log(eight);




// Problem 6
function multiply(a, b) {
    return [a * 3, b * 3];
}

const [firstValue, secondValue] = multiply(2, 4);

console.log(firstValue);
console.log(secondValue);




// Problem 7
const person = {
    name: "Rahim",
    city: "Dhaka"
};

const { name, city, phone = "N/A" } = person;

console.log(name);
console.log(city);
console.log(phone);




// Problem 8
const teacher = {
    name: "Maria",
    profession: "Teacher"
};

const { name: teacherName, profession: job } = teacher;

console.log(teacherName);
console.log(job);