// problem-01
// 100 er cheye boro kono number ache kina check

const numbers = [10, 25, 50, 120, 80];

const hasGreaterThan100 = numbers.some(num => num > 100);

console.log(hasGreaterThan100);




// sob element 5 diye vag jay kina check

const numbers = [10, 15, 20, 25, 30];

const allDivisibleBy5 = numbers.every(num => num % 5 === 0);

console.log(allDivisibleBy5);



// ontoto ekta word "hello" kina check

const words = ["hi", "hello", "world", "javascript"];

const hasHello = words.some(word => word === "hello");

console.log(hasHello);




// sobar boyosh 18 er beshi kina check

const ages = [20, 25, 30, 22, 19];

const allAdult = ages.every(age => age > 18);

console.log(allAdult);