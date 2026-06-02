// Problem 1
const prices = [30, 45, 20, 60, 10];

// prottek item er dam 13 taka kore barano
const increasedPrices = prices.map(price => price + 13);

console.log(increasedPrices);




// Problem 2
const players = ['Messi', 'Maradona', 'Pele', 'Zidane', 'Ronaldo'];

// 5 er beshi letter ache emon nam
const longNames = players.filter(name => name.length > 5);

console.log(longNames);




// Problem 3
const numbers = [10, 15, 20, 25, 30, 35];

// 20 er cheye boro prothom number
const firstGreaterThan20 = numbers.find(num => num > 20);

console.log(firstGreaterThan20);




// Problem 4
const heights = [65, 70, 68, 72, 68, 73];

// 69 er beshi height gulo
const tallHeights = heights.filter(height => height > 69);

console.log(tallHeights);





// Problem 6
const friends = [
    'Leonardo',
    'Brad Pitt',
    'Kate Winslet',
    'Audrey Hepburn',
    'Johnny Depp'
];

// prottek friend er nam print
friends.map(friend => console.log(friend));



// Problem 7
const names = ['Tom', 'Harry', 'Sam', 'Jack'];

// H diye suru prothom nam
const hName = names.find(name => name.startsWith('H'));

console.log(hName);



// Problem 8
const arr = [1, 2, 3, 4, 5];

// forEach diye print
arr.forEach(num => {
    console.log(num);
});




// Problem 9
const animals = ['cow', 'goat', 'sheep', 'horse'];

// prottek animal print
animals.forEach(animal => {
    console.log(animal);
});