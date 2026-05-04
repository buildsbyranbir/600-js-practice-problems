// problem-01
function checkEvenOdd(arr) {
  if (arr.length % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Example
console.log(checkEvenOdd([1, 2, 3])); // Odd


//problem-02
function getFirstLetter(name) {
  return name[0];
}

// Example
console.log(getFirstLetter("Raju")); // R




//problem-03
function processNumber(num) {
  if (num > 10) {
    return num / 10;
  } else {
    return num * 10;
  }
}

// Example
console.log(processNumber(20)); // 2
console.log(processNumber(5));  // 50



//problem-04
function sumFirstTwo(arr) {
  return arr[0] + arr[1];
}

// Example
console.log(sumFirstTwo([5, 10, 20])); // 15




//problem-05
function modifyNumber(n) {
  if (n >= 0) {
    return n * 2;
  } else {
    return n * 3;
  }
}

// Example
console.log(modifyNumber(5));   // 10
console.log(modifyNumber(-5));  // -15


//problem-06
function compareNames(name1, name2) {
  return name1.length > name2.length;
}

// Example
console.log(compareNames("Raju", "Ali")); // true



//problem-07
function multiplyCheck(a, b) {
  let result = a * b;

  if (result > 100) {
    return result / 2;
  } else {
    return result;
  }
}

// Example
console.log(multiplyCheck(10, 20)); // 100 → 50
console.log(multiplyCheck(5, 10));  // 50