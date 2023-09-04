// ************************************************************************************************
// *                                   Array Exercises
// ************************************************************************************************
const people = ['Greg', 'Mary', 'Devon', 'James'];
console.log(people);

// 1. remove 'Greg'
people.shift();
console.log(people);

// 2. remove 'James'
people.pop();
console.log(people);

// 3. add 'Matt' to front
people.unshift('Matt');
console.log(people);

// 4. add my name to end
people.push('Philip');
console.log(people);

// 5. use slice to make copy of array, without including Mary or Matt
const newPeople = people.slice(2);
console.log(newPeople);

// 6. command that gives indexOf where Mary is located
console.log(people.indexOf('Mary'));

// 7. command that gives indexOf where Foo is located
console.log(people.indexOf('Foo'));

// 8. redefine people variable. Remove Devon. Add Elizabeth and Artie
people[0] = 'Greg'; //switch Matt back to Greg
people.pop(); //Get rid of my name
people.splice(2, 1, 'Elizabeth', 'Artie', 'James');
console.log(people);

// 9. create new variable withBob. Set it equal to people array concatenated with the string of Bob
let withBob = people.concat('Bob');
console.log(withBob);

// ************************************************************************************************
// *                                   Arrow Function Exercises
// ************************************************************************************************
// ES5 Map Callback
function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

// ES2015 Arrow Functions Shorthand
const double = (arr) => arr.map((val) => val * 2);

// Refactor the following to use arrow functions
function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

// answer
const squareAndFindEvens = (numbers) =>
  numbers.map((val) => val ** 2).filter((square) => square % 2 === 0);

// ************************************************************************************************
// *                                   Destructuring Exercises
// ************************************************************************************************
// *Object destructuring 1
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

// *Object Destructuring 2
let planetFacts = {
  numPlanets1: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets1, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// *Object Destructuring 3
function getUserData({ firstName, favoriteColor = 'green' }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // 'Your name is Alejandro and you like purple'
getUserData({ firstName: 'Melissa' }); // 'Your name is Melissa and you like green'
getUserData({}); // 'Your name is undefined and you like green'

// *Array Destructuring 1
let [first, second, third] = ['Maya', 'Marisa', 'Chi'];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

// *Array Destructuring 2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  'Raindrops on roses',
  'whiskers on kittens',
  'Bright copper kettles',
  'warm woolen mittens',
  'Brown paper packages tied up with strings',
];

console.log(raindrops); // Raindrops on roses
console.log(whiskers); // whiskers on kittens
console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']

// *Array Destructuring 3
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // [10, 30, 20]

// *ES5 Assigning Variables to Object Properties
var obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

var a = obj.numbers.a;
var b = obj.numbers.b;
/* Write an ES2015 Version */
const newObj = {
  numbers: {
    a1: 1,
    b1: 2,
  },
};
const { a1, b1 } = newObj.numbers;

// *ES5 Array Swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
/* Write an ES2015 Version */
[arr[0], arr[1]] = [arr[1], arr[0]];

// *raceResults()
// raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']);

const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

// ************************************************************************************************
// *                                   Find-FindIndex Exercises
// ************************************************************************************************

/*  Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

function findUserByUsername(usersArray, username) {
  return usersArray.find(function (user) {
    return user.username === username;
  });
}

/*
  Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 
  
  const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
  removeUser(users, 'akagen') // {username: 'akagen'}
  removeUser(users, 'akagen') // undefined
  */

function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function (user) {
    return user.username === username;
  });
  if (foundIndex === -1) return;

  return usersArray.splice(foundIndex, 1)[0];
}

// ************************************************************************************************
// *                                   Maps-Sets Exercises
// ************************************************************************************************

// *Quick Question #1
new Set([1, 1, 2, 2, 3, 4]); // {1, 2, 3, 4}

// *Quick Question #2
[...new Set('referee')].join(''); // 'ref

// *Quick Questions #3
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// Map(4) {Array(3) => true, Array(3) => false, Array(3) => true, Array(3) => false}

// *hasDuplicate
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

hasDuplicate([1, 3, 2, 1]); // true
hasDuplicate([1, 5, -1, 4]); // false

// *vowelCount
function isVowel(char) {
  return 'aeiou'.includes(char);
}

function vowelCount(str) {
  const vowelMap = new Map();
  for (let char of str) {
    let lowercaseChar = char.toLowerCase();
    if (isVowel(lowercaseChar)) {
      if (vowelMap.has(lowercaseChar)) {
        vowelMap.set(lowercaseChar, vowelMap.get(lowercaseChar) + 1);
      } else {
        vowelMap.set(lowercaseChar, 1);
      }
    }
  }
  return vowelMap;
}

// ************************************************************************************************
// *                                   ForEach-Filter-Map Exercises
// ************************************************************************************************

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
  let newArray = [];
  arr.forEach(function (val) {
    newArray.push(val * 2);
  });
  return newArray;
}

/*
      Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
      
      Examples:
          onlyEvenValues([1,2,3]) // [2]
          onlyEvenValues([5,1,2,3,10]) // [2,10]
      
      */
function onlyEvenValues(arr) {
  let newArray = [];
  arr.forEach(function (val) {
    if (val % 2 === 0) {
      newArray.push(val);
    }
  });
  return newArray;
}

/*
      Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
      
      Examples:
          showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
          showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
      
      */
function showFirstAndLast(arr) {
  let newArray = [];
  arr.forEach(function (val) {
    newArray.push(val[0] + val[val.length - 1]);
  });
  return newArray;
}

/*
      Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 
      
      Examples:
          addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
          
          // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
      
      */
function addKeyAndValue(arr, key, value) {
  arr.forEach(function (val) {
    val[key] = value;
  });
  return arr;
}

/*
      Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
      
      Examples:
          vowelCount('Elie') // {e:2,i:1};
          vowelCount('Tim') // {i:1};
          vowelCount('Matt') // {a:1})
          vowelCount('hmmm') // {};
          vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
      */
function vowelCount(str) {
  let splitArr = str.split('');
  let obj = {};
  const vowels = 'aeiou';

  splitArr.forEach(function (letter) {
    let lowerCasedLetter = letter.toLowerCase();
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      } else {
        obj[lowerCasedLetter] = 1;
      }
    }
  });
  return obj;
}

/*
      Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled
      
      Examples:
          doubleValuesWithMap([1,2,3]) // [2,4,6]
          doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
      */

function doubleValuesWithMap(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

/*
      Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
      
      Examples:
          valTimesIndex([1,2,3]) // [0,2,6]
          valTimesIndex([1,-2,-3]) // [0,-2,-6]
      */

function valTimesIndex(arr) {
  return arr.map(function (val, idx) {
    return val * idx;
  });
}

/*
      Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
      
      Examples:
          extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
      */

function extractKey(arr, key) {
  return arr.map(function (val) {
    return val[key];
  });
}

/*
      Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
      
      Examples:
          extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
      */

function extractFullName(arr) {
  return arr.map(function (val) {
    // return val.first + ' ' + val.last;
    return `${val.first} ${val.last}`;
  });
}

/*
      Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
      
      Examples:
          filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
      */

function filterByValue(arr, key) {
  return arr.filter(function (val) {
    return val[key] !== undefined;
  });
}

/*
      Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
      
      Examples:
          find([1,2,3,4,5], 3) // 3
          find([1,2,3,4,5], 10) // undefined
      */

function find(arr, searchValue) {
  return arr.filter(function (val) {
    return val == searchValue;
  })[0];
}

/*
      Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.
      
      Examples:
          findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
      */

function findInObj(arr, key, searchValue) {
  return arr.filter(function (val) {
    return val[key] === searchValue;
  })[0];
}

/*
      Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
      
      Examples:
          removeVowels('Elie') // ('l')
          removeVowels('TIM') // ('tm')
          removeVowels('ZZZZZZ') // ('zzzzzz')
      */

function removeVowels(str) {
  const vowels = 'aeiou';
  return str
    .toLowerCase()
    .split('')
    .filter(function (val) {
      return vowels.indexOf(val) === -1;
    })
    .join('');
}

/*
      Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).
      
      Examples:
          doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
          doubleOddNumbers([4,4,4,4,4]) // []
      */

function doubleOddNumbers(arr) {
  return arr
    .filter(function (val) {
      return val % 2 !== 0;
    })
    .map(function (val) {
      return val * 2;
    });
}

// ************************************************************************************************
// *                                   Functions Exercises
// ************************************************************************************************

// ---------DIFFERENCE--------------
// function that takes in two parameters and returns the difference

function dif(x, y) {
  return x - y;
}

// ---------PRODUCT----------------
// function takes in two parameters and returns the product

function product(a, b) {
  return a * b;
}

// ---------DAY OF WEEK------------
// function takes in one parameter (1-7) and prints corresponding day

function printDay(num) {
  // create variable weekdays and make it an object with key:value pairs
  let weekdays = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday',
  };
  // return the object key which will log the value of the key
  return weekdays[num];
}

// ---------LAST ELEMENT-------------
// function takes in one parameter(array) and returns last value in the array

function lastElement(arr) {
  // return the length of the array minus 1
  // the array starts at zero, but the length will give actual count
  // subtracting one gives the value of the last position in the array
  return arr[arr.length - 1];
}

// ----------NUMBER COMPARE----------------
// functions takes in two parameters and tells which one is greater, or if they are equal

function numberCompare(w, p) {
  // first parameter greater than second parameter
  if (w > p) {
    // use template literal to log result
    return `First number ${w} is greater than second number ${p}`;
  }
  // first parameter less than second parameter
  if (w < p) {
    // use template literal to log result
    return `Second number ${p} is greater than first number ${w}`;
  }
  // first parameter is equal to senond parameter
  if (w === p) {
    // use template literal to log result
    return `The two numbers ${w} and ${p} are equal`;
  }
}

// -----------SINGLE LETTER COUNT--------------
// function takes in two parameters: word and letter
// function tells how many times letter appears in word
// function is case insensitive.
// if no letter is found, function returns 0

function singleLetterCount(word, letter) {
  // create variable finalCount that starts at zero every time
  let finalCount = 0;
  // create variable singleWord that is changed to lowercase value
  const singleWord = word.toLowerCase();
  // create variable singleLetter that is changed to lowercase value
  const singleLetter = letter.toLowerCase();
  // create for loop that starts at beginning of string and goes to end of string and moves one space in the string with each loop
  for (let i = 0; i < singleWord.length; i++) {
    // create condition that says if the position of the loop is equal to the letter chosen in the second parameter...
    if (singleWord[i] === singleLetter) {
      // then add one to the finalCount variable
      finalCount++;
    }
  }
  // return the finalCount variable which will be the end result of the counting for loop
  return finalCount;
}

// ------------MULTIPLE LETTER COUNT--------------
// function takes in one parameter
// returns an object with the keys being the letters and the values being count of the letter

function multLetterCount(str) {
  // set the string parameter to lowercase value
  str = str.toLowerCase();
  // create endCount variable and set it to empty object
  let endCount = {};
  // create for loop that starts at first position in string, goes to end of string, moves to next position with each loop
  for (let i = 0; i < str.length; i++) {
    // create condition that says if a position in the endCount variable comes back undefined...
    if (endCount[str[i]] === undefined) {
      // that position has a value of 1
      endCount[str[i]] = 1;
      // if the above condition is not met...
    } else {
      // then add 1 to the position in the loop (which is stored in the endCount variable)
      endCount[str[i]]++;
    }
  }
  // return the variable endCount, which is now an object with keys being the letters and values being the number of
  // times that letter appears in the string
  return endCount;
}

// --------------ARRAY MANIPULATION-------------
// function to take in at most four parameters: array, command, location, value
// if command is remove and location is end, function should remove last value and return removed value
// if command is remove and location is beginning, function should remove first value and return removed value
// if command is add and location is beginning, function should add value to beginning and return added value
// if command is add and location is end, function should add value to end and return added value

function arrayManipulation(arr, cmnd, loc, val) {
  // if command equals 'remove' and location equals 'end'
  if (cmnd === 'remove' && loc === 'end') {
    // remove last value in arrary
    arr.pop();
    // then return array
    return arr;
  }
  // if command equals 'remove' and location equals 'beginning'
  if (cmnd === 'remove' && loc === 'beginning') {
    // remove first value in array
    arr.shift();
    // then return array
    return arr;
  }
  // if command equals 'add' and location equals 'end'
  if (cmnd === 'add' && loc === 'end') {
    // add the value given to the end of array
    arr.push(val);
    // then return the array
    return arr;
  }
  //   if command equals 'add' and location equals 'beginning'
  if (cmnd === 'add' && loc === 'beginning') {
    // add the value given to the beginning of array
    arr.unshift(val);
    // and then return the array
    return arr;
  }
}

// --------------IS PALINDROME----------------
// function to take in one parameter and return true or false if it is a palindrome
// allow funstion to to ignore whitespace and capiltalization

function isPalindrome(phrase) {
  // set phrase parameter to lowercase value
  phrase = phrase.toLowerCase();
  // create for loop that starts at zero, and then loops as long as the position in the loop is less
  // than half the length of the string, and add one to each loop until it ends
  for (let i = 0; i < phrase.length / 2; i++) {
    // create boolean condition that if the certain value of the certain position in the string does not equal
    // the value of the string at the exact opposite position
    if (phrase[i] !== phrase[phrase.length - 1 - i]) {
      // return false boolean value
      return false;
    }
  }
  // if the condition is not met, return the boolean value true
  return true;
}

// ----------------BONUS-------------------
// use prompt to get used to choose 'rock', 'paper', 'scissors'
// write function that decides whether user will 'win', 'lose', pr 'tie' vs. computer

function rockPaperScissors() {
  // create function for the computer
  function computer(num) {
    // set condition that if random number is less than or equal to 3, return 'rock'
    if (num <= 3) return 'rock';
    // set condition that if random number is between 3 and 6, return 'paper'
    if (num > 3 && num <= 6) return 'paper';
    // set condition that if random number is above 6, return 'scissors'
    if (num > 6) return 'scissors';
  }

  // create variable that initiates a prompt asking user to choose 'rock, paper, scissors'
  let userChoice = prompt(
    'Choose ONE:   rock  -  paper  -  scissors'
    // set variable to lowercase
  ).toLowerCase();
  // create variable for computer choice and cut off decimals places and multiply by 10 to give random number between 1-9
  let computerChoice = computer(Math.floor(Math.random() * 10));
  // create variable for user input in the prompt
  let answers = ['rock', 'paper', 'scissors'];
  // create condition that looks out for typos
  if (!userChoice || answers.indexOf(userChoice) === -1)
    return 'Please select either: rock - paper - scissors';

  // create condition for a tie if user and computer guess same thing
  if (userChoice === computerChoice)
    // return template literal to show user choice and computer choice
    return `Tie! You chose ${userChoice} and the computer chose ${computerChoice}`;
  // create condition where computer wins with rock over paper
  if (userChoice === 'rock' && computerChoice === 'paper')
    // return template literal to show user choice and computer choice
    return `You lose! ${computerChoice}(computer) beats ${userChoice}(yours)`;
  // create condition where computer wins with scissors over paper
  if (userChoice === 'paper' && computerChoice === 'scissors')
    // return template literal to show user choice and computer choice
    return `You lose! ${computerChoice}(computer) beats ${userChoice}(yours)`;
  // create condition where computer wins with rock over scissors
  if (((userChoice === 'scissors') === computerChoice) === 'rock')
    // return template literal to show user choice and computer choice
    return `You lose! ${computerChoice}(computer) beats ${userChoice}(yours)`;
  // create condition where user wins with paper over rock
  if (computerChoice === 'rock' && userChoice === 'paper')
    // return template literal to show user choice and computer choice
    return `You win! ${userChoice}(yours) beats ${computerChoice}(computer)`;
  // create condition where user wins with scissors over paper
  if (computerChoice === 'paper' && userChoice === 'scissors')
    // return template literal to show user choice and computer choice
    return `You win! ${userChoice}(yours) beats ${computerChoice}(computer)`;
  // create condition where user wins with rock over scissors
  if (((computerChoice === 'scissors') === userChoice) === 'rock')
    // return template literal to show user choice and computer choice
    return `You lose! ${userChoice}(yours) beats ${computerChoice}(computer)`;
}
// rockPaperScissors();

// ************************************************************************************************
// *                                   Loops Exercises
// ************************************************************************************************

// Numbers up to ten
for (let i = 0; i <= 10; i++) {
  console.log(`For Loop: ${i}`);
}
let num = -1;
while (num < 10) {
  num++;
  console.log(`While loop: ${num}`);
}

// even numbers up to 20
for (let j = 0; j <= 20; j += 2) {
  console.log(`Even number with for loop: ${j}`);
}

// odd numbers to 20
let odd = -1;
while (odd < 19) {
  odd += 2;
  console.log(`Odd number with while loop: ${odd}`);
}

// back to zero
for (let k = 10; k >= 0; k -= 1) {
  console.log(`For loop backwards: ${k}`);
}

// ************************************************************************************************
// *                                   Object Enhancement Exercises
// ************************************************************************************************

// *Same keys and values
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }
function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

// *Computed Property Names
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"
let favoriteNumber = 42;

const instructor = {
  firstName: 'Colt',
  [favoriteNumber]: 'That is my favorite!',
};

// *Object Methods
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }
const newInstructor = {
  firstName: 'Colt',
  sayHi() {
    return 'Hi!';
  },
  sayBye() {
    return this.firstName + ' says bye!';
  },
};

// *createAnimal function
const d = createAnimal('dog', 'bark', 'Woooof!');
// // {species: "dog", bark: ƒ}
d.bark(); //"Woooof!"

const s = createAnimal('sheep', 'bleet', 'BAAAAaaaa');
// // {species: "sheep", bleet: ƒ}
s.bleet(); //"BAAAAaaaa"

function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}

// ************************************************************************************************
// *                                   Reduce Exercises
// ************************************************************************************************

/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
  return arr.reduce(function (accum, next) {
    accum.push(next[key]);
    return accum;
  }, []);
}

/*
  Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
  
  Examples:
      vowelCount('Elie') // {e:2,i:1};
      vowelCount('Tim') // {i:1};
      vowelCount('Matt') // {a:1})
      vowelCount('hmmm') // {};
      vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
  */

function vowelCount(str) {
  const vowels = 'aeiou';
  return str.split('').reduce(function (accum, next) {
    let lowerCase = next.toLowerCase();
    if (vowels.indexOf(lowerCase) !== -1) {
      if (accum[lowerCase]) {
        accum[lowerCase]++;
      } else {
        accum[lowerCase] = 1;
      }
    }
    return accum;
  }, {});
}

/*
  Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.
  
  Examples:
      const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
      
      addKeyAndValue(arr, 'title', 'Instructor') // 
        [
          {title: 'Instructor', name: 'Elie'}, 
          {title: 'Instructor', name: 'Tim'}, 
          {title: 'Instructor', name: 'Matt'}, 
          {title: 'Instructor', name: 'Colt'}
         ]
  */

function addKeyAndValue(arr, key, value) {
  return arr.reduce(function (accum, next, idx) {
    accum[idx][key] = value;
    return accum;
  }, arr);
}

/*
  Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 
  
  Examples:
      
      function isEven(val){
          return val % 2 === 0;
      }
      
      const arr = [1,2,3,4,5,6,7,8];
      
      partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
      
      function isLongerThanThreeCharacters(val){
          return val.length > 3;
      }
      
      const names = ['Elie', 'Colt', 'Tim', 'Matt'];
      
      partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
  */

function partition(arr, callback) {
  return arr.reduce(
    function (accum, next) {
      if (callback(next)) {
        accum[0].push(next);
      } else {
        accum[1].push(next);
      }
      return accum;
    },
    [[], []]
  );
}

// ************************************************************************************************
// *                                   Rest-Spread Exercises
// ************************************************************************************************

// * ES5 Version
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function (num) {
//     return num % 2 === 0;
//   });
// }

// * ES2015 Version

const filterOutOdds = (...args) => args.filter((v) => v % 2 === 0);

// *                                 findMin
// * Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// * Make sure to do this using the rest and spread operator.

const findMin = (...args) => Math.min(...args);

// *                                 mergeObjects
// * Write a function called mergeObjects that accepts two objects and returns a new object which contains all the
// * keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// *                                 doubleAndReturnArgs
// * Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
// * The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];

// *                                 Slice and Dice!
// * For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
// * Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {}
const removeRandom = (items) => {
  let randomElem = Math.floor(Math.random() * items.length);
  return [...items.slice(0, randomElem), ...items.slice(randomElem + 1)];
};

/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {}
const extend = (array1, array2) => {
  return [...array1, ...array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {}
const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
/** Return a new object with a key removed. */

// function removeKey(obj, key) {}
const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};
/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {}
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */

// function update(obj, key, val) {}
const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

// ************************************************************************************************
// *                                   Some-Every Exercises
// ************************************************************************************************

/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr) {
  return arr.some(function (val) {
    return val % 2 !== 0;
  });
}

/*
  Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false
  
  Examples:
      hasAZero(3332123213101232321) // true
      hasAZero(1212121) // false
  */

function hasAZero(num) {
  return num
    .toString()
    .split('')
    .some(function (val) {
      return val === '0';
    });
}

/*
  Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 
  
  Examples:
      hasOnlyOddNumbers([1,3,5,7]) // true
      hasOnlyOddNumbers([1,2,3,5,7]) // false
  */

function hasOnlyOddNumbers(arr) {
  return arr.every(function (val) {
    return val % 2 !== 0;
  });
}

/*
  Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.
  
  Examples:
      hasNoDuplicates([1,2,3,1]) // false
      hasNoDuplicates([1,2,3]) // true
  */

function hasNoDuplicates(arr) {
  return arr.every(function (val) {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}

/*
  Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.
  
  Examples:
      var arr = [
          {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
          {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
          {title: "Instructor", first: 'Matt', last:"Lane"}, 
          {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
      ]
      
      hasCertainKey(arr,'first') // true
      hasCertainKey(arr,'isCatOwner') // false
  */

function hasCertainKey(arr, key) {
  return arr.every(function (val) {
    return key in val;
  });
}

/*
  Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.
  
  Examples:
      var arr = [
          {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
          {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
          {title: "Instructor", first: 'Matt', last:"Lane"}, 
          {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
      ]
      
      hasCertainValue(arr,'title','Instructor') // true
      hasCertainValue(arr,'first','Elie') // false
      
  */

function hasCertainValue(arr, key, searchValue) {
  return arr.every(function (val) {
    return val[key] === searchValue;
  });
}
