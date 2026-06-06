// Problem 1
// fruits array banano
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

// Banana theke Cherry porjonto alada array te rakha
const selectedFruits = fruits.slice(1, 3);

console.log(selectedFruits);



// Problem 2
// cars array banano
const cars = ['Tesla', 'BMW', 'Toyota', 'Ford'];

// shudhu Tesla ar BMW rakha
const topCars = cars.slice(0, 2);

console.log(topCars);



// Problem 3
// movieList array
const movieList = ['Inception', 'Titanic', 'Joker', 'Avatar', 'Interstellar'];

// Joker ar Avatar bad diye tar jaygay Batman ar Superman add kora
movieList.splice(2, 2, 'Batman', 'Superman');

console.log(movieList);




// Problem 4
// players array
const players = ['Messi', 'Ronaldo', 'Neymar', 'Mbappe'];

// Neymar bad diye Halland add kora
players.splice(2, 1, 'Halland');

console.log(players);