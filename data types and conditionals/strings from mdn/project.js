//Declaring strings
const string = "the revolution will not be televised";
console.log(string);

const badString = string;
console.log(badString);

//Embedding JavaScript

const name = "Damian";
const greeting = `hello, ${name}`;
console.log(greeting);

const one = "hello,";
const two = "how are you?";
const joined = `${one} ${two}`;
console.log(joined);

//Concatenation in context

const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

//Concatenation using "+"

const greetings2 = "hello";
const name2 = "bob";
console.log(greetings2 + ", " + name2);

const greeting3 = "howdy";
const name3 = "ramesh";
console.log(`${greeting3}, ${name3}`);

//Including expressions in strings

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `i like the song ${song}. i gave it a score of ${(score / highestScore) * 100}%.`; // the expression inside the ${} is evaluated and the result is inserted into the string
console.log(output);

//Multiline strings

const newLine = `one day you finally knew
what you had to do, and began,`;
console.log(newLine);

const newLine2= "one day you finally knew\nwhat you had to do, and began,"; // the \n is a special character that represents a new line
console.log(newLine2);

//Including quotes in strings

const goodquotes1 = 'she said "i think so!';
const goodqueotes2 = `she said "i'm not goint in there!"`;
console.log(goodquotes1);
console.log(goodqueotes2);

const bigmouth = `I\'ve got no right to take my place...`;  // the backslash escapes the single quote so it doesn't end the string
console.log(bigmouth);

//Numbers vs. strings

const coolBandName = "front ";
const number = 242;
console.log(coolBandName + number); // the number is converted to a string and concatenated with the string

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);

