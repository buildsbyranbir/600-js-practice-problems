// Problem 1
const product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
};

// name bade baki property gulo new object e rakha
const { name, ...rest } = product;

console.log(rest);




// Problem 2
const project = {
    id: 101,
    title: "Web App",
    budget: 3000,
    client: "Tech Corp"
};

// title bade baki property gulo new object e rakha
const { title, ...others } = project;

console.log(others);





// Problem 3
const programmer = {
    name: "Sophia",
    language: "JavaScript",
    experience: 5,
    specialty: "Frontend",
    tools: "React"
};

// language & specialty alada, baki gulo details object e
const { language, specialty, ...details } = programmer;

console.log(language);
console.log(specialty);
console.log(details);





// Problem 4
const numbers = [10, 20, 3, 30, 300, 3000];

// prothom 2ta element bade baki gulo new array te
const [first, second, ...restNumbers] = numbers;

console.log(restNumbers);





// Problem 5
function sumRest(a, b, ...rest) {
    let sum = 0;

    for (const num of rest) {
        sum += num;
    }

    return sum;
}

console.log(sumRest(10, 20, 30, 40, 50)); // 120





// Problem 6
function average(...numbers) {
    let sum = 0;

    for (const num of numbers) {
        sum += num;
    }

    return sum / numbers.length;
}

console.log(average(10, 20, 30, 40, 50)); // 30