//problem-01
let amount = 4500;
let discount = 0;
let finalAmount;

if (amount > 6000) {
    discount = amount * 15 / 100;   // 15% discount
}
else if (amount > 3000) {
    discount = amount * 5 / 100;    // 5% discount
}
else {
    discount = 0;
}

finalAmount = amount - discount;

console.log("Total Amount:", amount);
console.log("Discount:", discount);
console.log("Payable Amount:", finalAmount);




//problem-02
let age = 65;
let ticketPrice = 100;

if (age < 12) {
    console.log("Free ticket");
}
else if (age <= 60) {
    console.log("50% discount. Pay:", ticketPrice * 0.5);
}
else {
    console.log("15% discount. Pay:", ticketPrice * 0.85);
}




//problem-03
let balance = 6000;

if (balance < 1000) {
    console.log("Deposit needed");
}
else if (balance <= 5000) {
    console.log("Good");
}
else {
    console.log("Very Good");
}




//problem-04
let marks = 85;

if (marks < 50) {
    console.log("Fail");
}
else if (marks <= 80) {
    console.log("Pass");
}
else {
    console.log("A+");
}




//problem-05
let pages = 550;

if (pages < 100) {
    console.log("Small book");
}
else if (pages <= 500) {
    console.log("Mid-size book");
}
else {
    console.log("Heart-attack size book");
}



//problem-06
let temperature = 25;

if (temperature < 0) {
    console.log("Ice");
}
else if (temperature <= 20) {
    console.log("Cool Cool");
}
else {
    console.log("Hot Hot");
}



//problem-07
let level = 55;

if (level < 10) {
    console.log("Novice");
}
else if (level <= 50) {
    console.log("Expert");
}
else {
    console.log("Pro Gamer");
}