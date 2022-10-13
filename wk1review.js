////////////////////////////////////////////////////////////////
// Conditionals:
///////////////////////////////////////////////////////////////

//1. Write a JavaScript display the larger of two integers

// function greaterInt(x, y) {
//   if (x > y) {
//     console.log(`${x} is greater than ${y}`)
//   } else if (x < y) {
//     console.log(`${y} is greater than ${x}`)
//   } else {
//     console.log('The integers are the same')
//   }
// }

// greaterInt(15, 9);
// greaterInt(8, 100);
// greaterInt(78, 78);

/* 2. Write an if/else statement for the following requirements:

If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F */

// function checkGrade(grade){
//   if (grade > 90) {
//     console.log('A');
//   } else if (grade > 80) {
//     console.log('B');
//   } else if (grade > 70) {
//     console.log('C');
//   } else if (grade > 55) {
//     console.log('D')
//   } else {
//     console.log('F')
//   }
// }

// checkGrade(13);
// checkGrade(99);
// checkGrade(85);


//3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"
// var current = new Date();
// console.log(current.toLocaleTimeString());

////////////////////////////////////////////////////////////////
// Strings:
///////////////////////////////////////////////////////////////

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
// console.log('Sabrina'.charAt(4));

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
// console.log('Teddy'.charCodeAt(2));

// Using fromCharCode() - make it readable for us :). You'll see!
// console.log(String.fromCharCode(72, 101, 108, 108, 111, 32, 84, 105, 115, 104, 97, 110, 97));

// Take your first and last name and concat()
const firstName = 'Alondra ';
const lastName = 'Torres';
// console.log(firstName.concat(lastName));

// Create a string and make it return true using startsWith()
// console.log(firstName.startsWith('A'));

// Now use any variable with endsWith() and return false
// console.log(lastName.endsWith('S'));

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, ';
// console.log(ozgur.includes('looked'));

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone.";
// console.log(joshHadALittleLambOopsCow.indexOf('cow'));

////////////////////////////////////////////////////////////////
// Boolean:
///////////////////////////////////////////////////////////////

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

// console.log(a < b);
// console.log(c > b);
// console.log(d === d);
// console.log(d != a);
// console.log(a < 15);
// console.log(a < b < c);
// console.log(c != b != a != d);


////////////////////////////////////////////////////////////////
// Loops:
///////////////////////////////////////////////////////////////

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
// for (i = 1; i <= 10; i++) {
//   console.log(`This is room spin ${i}!`);
// }

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
// for (i = 1; i <= 20; i++) {
//   console.log(`This is vission spin ${i}!`);
// }

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
// for (i = 1; i <= 20; i++) {
//   console.log(`${i}: I'm sorry `);
// }

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
}
// for (const property in whateverQueenBeySaid) {
//   console.log(`${property}: ${whateverQueenBeySaid[property]}`);
// }

// Using (FOR IN LOOP), print the indexes of the array.
// const lana = ['l', 'a', 'n', 'a']
// for (const element of lana) {
//   console.log(element);
// }

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
// for (const element of tia){
//   console.log(element);
// }

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
// function listNames(name) {
//   var x = 'PS'
//   console.log(`${name}` + ' ' + x);
// }
// const perscholas = ['Amira', 'Arely', 'Jonathan']
// console.log(perscholas.forEach(listNames));

////////////////////////////////////////////////////////////////
// Arrays:
///////////////////////////////////////////////////////////////

// Look up the following: Make a note of what each one of these methods do
// push(), add one or more elements to the end of an array and returns the new length of the array
// pop(), removes the last element from an array and returns that element

// unshift(), adds one or more elements to the beginning of an array and returns the new length of the array
// shift(), removes the first element from an array and returns that removed element. This method changes the length of the array

// concat(), used to merge two or more arrays, with changing the existing arrays
// splice(), changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// slice(), returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
// sort(), sorts the elements of an array in place and returns the reference to the same array, now sorted.
// includes(), determines whether an array includes a certain value among its entries, returning true or false as appropriate
// indexOf(), returns the first index at which a given element can be found in the array, or -1 if it is not present
// length, returns the length of a string

/* You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Raphael pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/
var shoppingList = [

  "cool ranch doritos",

  "kings hawaiian sweet bread",

  "peanut butter oreos",

  "fruit loops cereal"

];

// shoppingList.push('Hendricks gin');
// console.log(shoppingList);

//3.  Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.*/

// var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
// console.log(yoda.reverse());

//4. People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/

var waitList = ["Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro"];

// var nowServing;

// while(waitList.length != 0 ) {
//   nowServing = waitList.shift();
//   console.log(` Now serving: ${nowServing}, Current wait list: ${waitList} \n`);
// }


//5. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.

// var shoe = ["just", "do", "it"];
// var shoeString = shoe[0] + ' ' + shoe[1] + ' ' + shoe[2];
// console.log(shoeString);

// ===== SPREAD OPERATOR =====

// Create a variable and assign a value of a copied array using the spread operator
// var copyOfArr = [...shoppingList];
// console.log(copyOfArr);

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
// var firstArr = ['Lani'];
// var secondArr = ['Harley', 'Moose'];

// var connectedArr = [...firstArr, ...secondArr];
// console.log(connectedArr);

////////////////////////////////////////////////////////////////
// Functions:
///////////////////////////////////////////////////////////////

// Don't forget to CALL your functions

//1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
// function maxOfTwoNumbers(x, y) {
//   if (x > y) {
//     console.log(`${x} is greater than ${y}`)
//   } else if (x < y) {
//     console.log(`${y} is greater than ${x}`)
//   } else {
//     console.log('The integers are the same')
//   }
// }

// maxOfTwoNumbers(9, 0);
// maxOfTwoNumbers(8,19);
// maxOfTwoNumbers(2, -3);
// maxOfTwoNumbers(-4, -4);

//2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// function maxOfThree(x, y, z) {
//   if (x === y && y === z) {
//     console.log('The integers are the same');
//   } else if (x > y) {
//     if (z > x) {
//       console.log(`${z} is the largest number`);
//     } else {
//       console.log(`${x} is the largest number`);
//     }
//   } else if (y > x) {
//     if (z > y) {
//       console.log(`${z} is the largest number`);
//     } else {
//       console.log(`${y} is the largest number`);
//     }
//   } else if (x === y) {
//     if (z > y) {
//       console.log(`${z} is the largest number`);
//     } else {
//       console.log(`${y} is the largest number`);
//     }
//   } else if (x === z) {
//     if (y > z) {
//       console.log(`${y} is the largest number`);
//     } else {
//       console.log(`${z} is the largest number`);
//     }
//   } else if (y === z) {
//     if (x > z) {
//       console.log(`${x} is the largest number`);
//     } else {
//       console.log(`${z} is the largest number`);
//     }
//   } else {
//   }
// }

// maxOfThree(5, 0, 5);
// maxOfThree(8,1, 1);
// maxOfThree(2, 2, 0);
// maxOfThree(3, 3, 3);

//3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise
// function isCharacterAVowel(x) {
//   if(x === 'a' | x === 'e' | x === 'i' | x === 'o' | x === 'u') {
//     return true;
//   } else {
//     return false;
//   }
// }

// if
// (isCharacterAVowel('b'))
// isCharacterAVowel('e');
// isCharacterAVowel('i');

//4. Write a function charCount that takes a string and returns the length of the string.

//5. Write a function vowelCount that takes a String and returns the number of vowels in the String. Add a check for the string to be of 10 or less characters.

