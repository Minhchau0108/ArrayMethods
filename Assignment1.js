const inventors = [
	'Albert Einstein',
	'Issac Newton',
	'Galileo Galilei',
	'Marie Curie',
	'Johannes Kepler',
	'Nicolaus Copernicus',
	'Max Planck',
	'Katherine Blodgett',
	'Ada Lovelace',
	'Sarah E. Goode',
	'Lise Meitner',
	'Hanna Hammarstrom',
];
// FILTER
// Print out an array of the inventors whose name starts with ‘A'.
let nameArr = inventors.filter(inventor => inventor.startsWith('A'));
console.log(nameArr);

// Print out an array of the inventors whose first name and last name start with the same letter.
let sameLetter = inventors.filter(inventor => inventor.split(" ")[0][0] === inventor.split(" ")[1][0]);
console.log(sameLetter);

// MAP
// Print out an array of the length of every inventor's full name.
let lengthArray = inventors.map(inventor => inventor.length);
console.log(lengthArray);

// Print out an array of all the inventors' names in uppercase.
let uppercaseArray = inventors.map(inventor => inventor.toUpperCase());
console.log(uppercaseArray);

// REDUCE
//Create a string that has the first name of every inventor. ("Albert Issac Galileo ...")
const firstNames = inventors.reduce((total, current) => total + current.split(" ")[0] + " ","");
console.log(firstNames);
// Calculate sum of the length of all inventer's names.
const sumOfLength = inventors.reduce((total, current) => total + current.length, 0);
console.log(sumOfLength);

// SORT
// Sort all the inventors in alphabetical order, A-Z.
inventors.sort();
console.log(inventors);

// Sort all the inventors by length of name, shortest name first.
inventors.sort((a,b) => a.length - b.length);
console.log(inventors);

