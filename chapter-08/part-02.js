//problem-01
let player = {
  name: "Sakib",
  age: 36,
  sports: "Cricket",
  team: "Bangladesh"
};

console.log(player.team);


//problem-02
let laptop = {
  brand: "HP",
  price: 75000,
  hardDisc: "1TB",
  ram: "8GB",
  screenSize: "15.6 inch"
};

console.log(laptop.screenSize);


//problem-03
let favPlace = {
  name: "Cox's Bazar",
  distance: "400km",
  popularity: "high"
};

console.log(favPlace["popularity"]);


//problem-04
let phone = {
  brand: "Nokia",
  color: "black",
  price: 5000
};

console.log(phone["price"]);




//problem-05
let library = {
  name: "Public Library",
  location: "Dhaka",
  books: 5000
};

console.log(library.location);



//problem-06
let movie = {
  title: "Inception",
  director: "Nolan",
  rating: 9
};

console.log(movie["rating"]);



//problem-07
let college = {
  name: "NDC",
  established: 1949,
  groups: ["Science", "Arts", "Commerce"]
};

console.log(college.groups[1]);


//problem-08
let family = {
  father: {
    name: "Karim",
    age: 50,
    profession: "Teacher"
  },
  mother: {
    name: "Rahima",
    age: 45,
    profession: "Doctor"
  }
};

let motherAge = family.mother.age;
let fatherAge = family.father.age;
let totalAge = motherAge + fatherAge;

console.log("Mother Age:", motherAge);
console.log("Father Age:", fatherAge);
console.log("Total Age:", totalAge);