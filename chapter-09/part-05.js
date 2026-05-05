// problem-01
function sumOddNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 !== 0) {
      sum += num;
    }
  }
  return sum;
}

// Example
console.log(sumOddNumbers([5, 15, 8, 7])); // 27



//problem-02
function getSmallest(arr) {
  return arr[0] < arr[1] ? arr[0] : arr[1];
}

// Example
console.log(getSmallest([20, 45, 78])); // 20


//problem-03
function fixAge(age) {
  if (age < 18) return 18;
  if (age > 45) return 45;
  return age;
}

// Example
console.log(fixAge(10)); // 18
console.log(fixAge(50)); // 45
console.log(fixAge(30)); // 30



//problem-04
function sumDivisibleBy4(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 4 === 0) {
      sum += num;
    }
  }
  return sum;
}

// Example
console.log(sumDivisibleBy4([2, 4, 5, 7, 8, 32, 45])); // 44


//problem-05
function processNumber(num) {
  if (num < 20) {
    return num * 2;
  } else {
    return num / 20;
  }
}

// Example
console.log(processNumber(10)); // 20
console.log(processNumber(40)); // 2



//problem-06
function sumNegative(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num < 0) {
      sum += num;
    }
  }
  return sum;
}

// Example
console.log(sumNegative([2, -3, 5, -7, 6])); // -10



//problem-07
function multiplyDivisibleBy3(arr) {
  let result = 1;
  for (let num of arr) {
    if (num % 3 === 0) {
      result *= num;
    }
  }
  return result;
}

// Example
console.log(multiplyDivisibleBy3([3, 6, 7, 9])); // 162
