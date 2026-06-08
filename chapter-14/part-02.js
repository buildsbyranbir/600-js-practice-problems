// ===============================
// Problem 1
// Friends er nam string theke array banano
// ===============================

const friends = "Raju,Rana,Hasan,Kabir,Mahi";

// comma diye vag kore array banano
const friendsArray = friends.split(",");

console.log(friendsArray);

// Output:
// ["Raju", "Rana", "Hasan", "Kabir", "Mahi"]




// ===============================
// Problem 2
// Array theke string banano
// Protita namer majhe comma thakbe
// ===============================

const names = ["Raju", "Rana", "Hasan", "Kabir", "Mahi"];

const namesString = names.join(",");

console.log(namesString);

// Output:
// Raju,Rana,Hasan,Kabir,Mahi





// ===============================
// Problem 3
// String ke space diye split kore
// protita word array te rakha
// ===============================

const text = "function if else while";

const words = text.split(" ");

console.log(words);

// Output:
// ["function", "if", "else", "while"]





// ===============================
// Problem 4
// languages array ke string banano
// semicolon diye alada kora
// ===============================

const languages = ["JavaScript", "Python", "Java"];

const languageString = languages.join(";");

console.log(languageString);

// Output:
// JavaScript;Python;Java





// ===============================
// Problem 5
// Loop gular nam alada kora
// ===============================

const loops = "for,while,for-in,for-of,do-while";

const loopArray = loops.split(",");

console.log(loopArray);

// Output:
// ["for", "while", "for-in", "for-of", "do-while"]





// ===============================
// Problem 6
// String er shurur ebong sesher space remove kora
// ===============================

const str = " console log debug ";

const trimmedStr = str.trim();

console.log(trimmedStr);

// Output:
// console log debug





// ===============================
// Problem 7
// 4 ta string jora diye ekta string banano
// concat use kore
// ===============================

const str1 = "push";
const str2 = "pop";
const str3 = "shift";
const str4 = "unshift";

const result = str1.concat(" ", str2, " ", str3, " ", str4);

console.log(result);

// Output:
// push pop shift unshift





// ===============================
// Problem 8
// Hello JavaScript Developers
// theke JavaScript ber kora
// ===============================

const sentence = "Hello JavaScript Developers";

const jsWord = sentence.substring(6, 16);

console.log(jsWord);

// Output:
// JavaScript





// ===============================
// Problem 9
// Code more learn more
// theke learn ber kora
// ===============================

const sentence2 = "Code more learn more";

const learnWord = sentence2.substring(10, 15);

console.log(learnWord);

// Output:
// learn