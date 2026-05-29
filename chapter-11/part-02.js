// Problem 1

const num1 = 100;
const num2 = 20;

console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`);




// Problem 2

const employee = {
    name: "Rahim",
    age: 25,
    salary: 30000
};

console.log(`Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`);



// Problem 3

const fruits = ["Mango", "Banana", "Apple", "Orange"];

console.log(`My third favorite fruit is ${fruits[2]}`);




// Problem 4

const a = 50;
const b = 10;

console.log(`The division of a and b is ${a / b}`);




// Problem 5

const person = {
    firstName: "Amit",
    lastName: "Kumar"
};

console.log(`Full Name: ${person.firstName} ${person.lastName}`);



// Problem 6

const animals = ["Cat", "Dog", "Elephant"];

console.log(`My favorite animals are ${animals.join(", ")}`);




// Problem 7

const student = {
    name: "Karim",
    age: 18,
    results: [80, 90, 85]
};

const average =
    (student.results[0] +
     student.results[1] +
     student.results[2]) / 3;

console.log(
    `Student Name: ${student.name}, Age: ${student.age}, Average Marks: ${average}`
);