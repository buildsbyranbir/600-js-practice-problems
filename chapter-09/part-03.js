//problem-01
function isGreaterThanTen(num) {
  return num > 10;
}


//problem-02
function isDivisibleBy13(num) {
  return num % 13 === 0;
}


//problem-03
function totalBill(rice, curry, drinks) {
  return rice + curry + drinks;
}


//problem-04
function checkVoting(age) {
  if (age > 18) {
    return "Eligible for Voting";
  } else {
    return "Not Eligible";
  }
}


//problem-05
function getStringLength(str) {
  return str.length;
}


//problem-06
function averageOfThree(a, b, c) {
  return (a + b + c) / 3;
}


//problem-07
function makePositive(num) {
  if (num < 0) {
    return num * -1;
  }
  return num;
}