// problem-01
const book = {
  name: "Harry Potter",
  author: "J.K Rowling",
  price: 500
};

console.log(Object.keys(book));
console.log(Object.values(book));


// problem-02
const article = {
  title: "Learning JS",
  category: "Programming"
};

console.log("author" in article);



// problem-03
const laptop = {
  brand: "Dell",
  model: "Inspiron",
  price: 45000
};

for (let key in laptop) {
  console.log(key, ":", laptop[key]);
}




// problem-04
const phone = {
  brand: "Samsung",
  model: "Galaxy S21",
  price: 85000
};

const phoneKeys = Object.keys(phone);

for (let key of phoneKeys) {
  console.log(key, ":", phone[key]);
}




// problem-05
const bike = {
  brand: "Hero",
  price: 120000,
  model: "Splendor"
};

const bikeValues = Object.values(bike);

for (let value of bikeValues) {
  console.log(value);
}




// problem-06
const books = {
  book1: "Harry Potter",
  book2: "The Hobbit",
  book3: "Game of Thrones"
};

for (let key in books) {
  console.log(books[key]);
}




// problem-07
const numbers = {
  a: 10,
  b: 20,
  c: 30,
  d: 40
};

let sum = 0;

for (let key in numbers) {
  sum += numbers[key];
}

console.log(sum);




// problem-08
const player = {
  name: "Messi",
  team: "Argentina",
  goals: 91
};

const playerValues = Object.values(player);

console.log(playerValues);




// problem-09
const building = {
  floors: 10,
  address: {
    street: "Main Road",
    city: "Dhaka"
  },
  type: "Commercial"
};

for (let key in building) {
  console.log(key, ":", building[key]);
}