// problem_01
const income = 100;
const expenses = 50;
const savings = income - expenses;
console.log(savings);



// problem_02
const totalPencils = 10;
const everyTimeUse = 2;
const totalTimesUse = totalPencils / everyTimeUse;
console.log(totalTimesUse);


// problem_03
const totalTaka = 60;
const everyTimeExpenses = 15;
const totalTimesExpenses = totalTaka / everyTimeExpenses;
console.log(totalTimesExpenses);
const remainingTaka = totalTaka % everyTimeExpenses;
console.log(remainingTaka);



// problem_04
const firstWord = "Hello";
const secondWord = "World";
const fullSentence = firstWord + " " + secondWord;
console.log(fullSentence);


// problem_05
const rice = 153;
const lentils = 261;
const totalFood = rice + lentils;
console.log(totalFood);


// problem_06
// Use Math.floor() when you need the whole number and want to remove the decimal part.

const moneyInWallet = 500;
const everyTimeexpenses = 75;
const totalTimesMoneyExpenses = Math.floor(moneyInWallet / everyTimeexpenses);
console.log(totalTimesMoneyExpenses);
const remainingMoney = moneyInWallet % everyTimeexpenses;
console.log(remainingMoney);


// problem_07
const number = 8;
const divisor = 3;

const quotient = Math.floor(number / divisor);
const remainder = number % divisor;

console.log(quotient);
console.log(remainder);


// problem_08
const newnumber = 50;
const newdivisor = 9;

const newremainder = newnumber % newdivisor;
console.log(newremainder);


// problem_09
const first1 = "Bangla";
const second2 ="desh";
const fullWord = first1 + second2;
console.log(fullWord)



// problem_10
const totalRice = 480;
const dailyEat = 4;

const totalDays = totalRice / dailyEat;
const months = totalDays / 30;

console.log(totalDays);
console.log(months);
