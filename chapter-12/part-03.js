// Problem 1
const technologies = ["Condition", "array", "loop"];

// "variable" ke first e add kore new array
const newTechnologies = ["variable", ...technologies];

console.log(newTechnologies);




// Problem 2
const fruits = ["Apple", "Banana", "Mango"];

// seshe papaya & orange add
const myFruits = [...fruits, "papaya", "orange"];

console.log(myFruits);





// Problem 3
const frontEnd = ["JavaScript"];
const backEnd = ["Node.js"];
const database = ["MongoDB"];

// 3 ta array merge
const fullStack = [...frontEnd, ...backEnd, ...database];

console.log(fullStack);





// Problem 4
const website = {
    name: "MySite",
    type: "e-commerce",
    status: "active"
};

// theme add kore new object
const updatedWebsite = {
    ...website,
    theme: "dark"
};

console.log(updatedWebsite);





// Problem 5
const young = {
    name: "Arif",
    age: 30,
    country: "B Baria"
};

// country bade baki property
const { country, ...newYoung } = young;

console.log(newYoung);



 


// Problem 6
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

// copy kore year update
const updatedCar = {
    ...car,
    year: 2032
};

console.log(updatedCar);