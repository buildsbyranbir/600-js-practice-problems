// Problem 1
// Find the average of even numbers in an array

function evenAverage(numbers) {
    let sum = 0;
    let count = 0;

    for (let num of numbers) {
        if (num % 2 === 0) {
            sum += num;
            count++;
        }
    }

    let average = sum / count;
    return average;
}

let result1 = evenAverage([2, 4, 6, 8]);
console.log(result1);




// Problem 2
// Multiply odd numbers by 2 and return a new array

function oddMultiply(numbers) {
    let newArray = [];

    for (let num of numbers) {
        if (num % 2 !== 0) {
            newArray.push(num * 2);
        }
    }

    return newArray;
}

let result2 = oddMultiply([1, 2, 3, 4, 5, 6]);
console.log(result2);



// Problem 3
// Check if the array contains odd numbers

function checkOdd(numbers) {
    let hasOdd = false;

    for (let num of numbers) {
        if (num % 2 !== 0) {
            hasOdd = true;
            break;
        }
    }

    if (hasOdd) {
        return "Odd numbers found";
    } else {
        return "No odd numbers found";
    }
}

console.log(checkOdd([2, 4, 6]));
console.log(checkOdd([2, 3, 4]));




// Problem 4
// Find the average of odd numbers and show 2 decimal places

function oddAverage(numbers) {
    let sum = 0;
    let count = 0;

    for (let num of numbers) {
        if (num % 2 !== 0) {
            sum += num;
            count++;
        }
    }

    let average = sum / count;
    return average.toFixed(2);
}

let result4 = oddAverage([1, 3, 5, 7]);
console.log(result4);




// Problem 5
// Subtract 1 from each odd number and return a new array

function subtractOne(numbers) {
    let newArray = [];

    for (let num of numbers) {
        if (num % 2 !== 0) {
            newArray.push(num - 1);
        }
    }

    return newArray;
}

let result5 = subtractOne([1, 2, 3, 4, 5]);
console.log(result5);