// Problem 1: Package delivery charge

function deliveryCharge(weight) {
    if (weight < 10) {
        return weight * 100;
    }
    else if (weight < 20) {
        return weight * 300;
    }
    else if (weight < 50) {
        return weight * 1000;
    }
    else {
        return weight * 100;
    }
}

console.log(deliveryCharge(5));
console.log(deliveryCharge(15));
console.log(deliveryCharge(30));





// Problem 2: Grade function

function getGrade(marks) {
    if (marks >= 80) {
        return "A";
    }
    else if (marks >= 70) {
        return "B";
    }
    else if (marks >= 60) {
        return "C";
    }
    else if (marks >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}

console.log(getGrade(85));
console.log(getGrade(72));
console.log(getGrade(45));





// Problem 3: Tax bracket

function taxBracket(income) {
    if (income <= 50000) {
        return 10;
    }
    else if (income <= 100000) {
        return 20;
    }
    else if (income <= 200000) {
        return 30;
    }
    else {
        return 40;
    }
}

console.log(taxBracket(40000));
console.log(taxBracket(80000));
console.log(taxBracket(250000));