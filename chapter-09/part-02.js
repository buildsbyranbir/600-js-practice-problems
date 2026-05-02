// problem-01
function totalAge(fatherAge, sonAge) {
    return fatherAge + sonAge;
}

// example
console.log(totalAge(50, 20)); // 70


//problem-02
function multiply(a, b) {
    return a * b;
}

// example
console.log(multiply(20, 15)); // 300


//problem-03
function totalMarks(m1, m2, m3) {
    return m1 + m2 + m3;
}

// example
console.log(totalMarks(70, 80, 90)); // 240


//problem-04
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

// example
console.log(calculateAge(2000));


//problem-05
function lachchaCalculator(money) {
    const pricePerUnit = 35;
    const quantity = Math.floor(money / pricePerUnit);

    return quantity;
}

// example
console.log(lachchaCalculator(200));




//problem-06
function average(a, b, c, d) {
    return (a + b + c + d) / 4;
}

// example
console.log(average(10, 20, 30, 40)); // 25



//problem-07
function sellingPrice(costPrice) {
    return costPrice + 250;
}

// example
console.log(sellingPrice(1000)); // 1250




//problem-08
function yearWhen100(birthYear) {
    return birthYear + 100;
}

// example
console.log(yearWhen100(2000)); // 2100




//problem-09
function monthlyUsage(hoursPerDay) {
    return hoursPerDay * 30;
}

// example
console.log(monthlyUsage(5)); // 150 hours