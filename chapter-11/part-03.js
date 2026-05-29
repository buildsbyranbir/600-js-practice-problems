// Problem 1
const getFirstElement = arr => arr[0];

console.log(getFirstElement([10, 20, 30]));




// Problem 2
const multiplyThreeNumbers = (a, b, c) => a * b * c;

console.log(multiplyThreeNumbers(2, 3, 4));



// Problem 3
const getUnknown = () => "unknown";

console.log(getUnknown());



// Problem 4
const divideMoney = person => person.money / 5;

const person = {
    name: "Rahim",
    money: 500
};

console.log(divideMoney(person));



// Problem 5
// Array er last index ber korar practice
const fruits = ["Mango", "Apple", "Banana"];

const lastIndex = fruits.length - 1;
console.log(lastIndex);

// First ar last element er jogfol
const firstLastSum = arr => arr[0] + arr[arr.length - 1];

console.log(firstLastSum([10, 20, 30, 40]));



// Problem 6
const addNumbers = (a = 10, b = 5) => a + b;

console.log(addNumbers(20, 30));
console.log(addNumbers());
console.log(addNumbers(20));