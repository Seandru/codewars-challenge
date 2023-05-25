// 7kyu 

function getCount(str) {
  count = 0;
  const splitStr = str.split('');
  for(i = 0; i < splitStr.length; i++){
    if(splitStr[i] === 'a' || splitStr[i] === 'e' || splitStr[i] === 'i' || splitStr[i] === 'o' || splitStr[i] === 'u'){
      count++;
    }
  }
  return count;
}

function squareDigits(num){
  const digits = num.toString().split('');
  const squareDigits = digits.map(x => x * x);
  const joinedDigits = squareDigits.join('');
  const result = parseInt(joinedDigits);
  return result;
}

function highAndLow(numbers) {
  const splitNumbers = numbers.split(' ');
  let lowestNumber = parseInt(splitNumbers[0]);
  let highestNumber = parseInt(splitNumbers[0]);
  for (let i = 0; i < splitNumbers.length; i++) {
    const num = parseInt(splitNumbers[i]);
    if (num < lowestNumber) {
      lowestNumber = num;
    }
    if (num > highestNumber) {
      highestNumber = num;
    }
  }
  return `${highestNumber} ${lowestNumber}`;
}

function descendingOrder(n) {
  const digits = n.toString().split('');
  const sortedDigits = digits.sort((a, b) => b - a);
  const joinedDigits = sortedDigits.join('');
  const result = parseInt(joinedDigits);
  return result;
}

function getMiddle(s){
  let middleChar = 0; 
  if(s.length % 2 !== 0){
    middleChar = s.charAt(s.length / 2);
  } else {
    middleChar = s.charAt(Math.ceil((s.length / 2) - 1)) + s.charAt(Math.floor(s.length / 2));
  } 
  return middleChar;
} 


// 8kyu

// The multiply function returns the multiplication between two numbers
function multiply(a, b){
    return a * b;
}

// The positiveSum goes through each element of the array and returns the sum of the positive ones.
function positiveSum(arr) {
    let sum = 0;
    for(i = 0 ; i < arr.length ; i++){
      if(arr[i] > 0){
        sum += arr[i];
      }
    }
    return sum;
}

// The makeNegative function takes a number and returns the opposite of it.
function makeNegative(num) {
    if(num > 0){
      return -num;
    } else {
      return num;
    }
}

// The reverseString function returns a new string with the reversed characters of the given string.
function reverseString(str){
    let word = '';
    for(i = str.length - 1; i >= 0; i--){
      word+= str.charAt(i);
    } 
    return word;
}

// The boolToWord function takes a boolean value and returns 'No' if false and 'Yes' if true.
function boolToWord(bool){
    if(bool !== true){
      return 'No';
    } else {
      return 'Yes';
    } 
}

// The numberToString takes a number and returns it as a string.
function numberToString(num) {
    return JSON.stringify(num);
}

// The opposite function takes a number and returns the opposite of it.
function opposite(number) {
    return -number;
}

// The removeFirstAndLastChar function takes a string and removes its first and last character.
function removeFirstAndLastChar(str){
    return str.slice(1, -1);
};

// The repeatStr function concatenates the string s n times and returns the resulting string.
function repeatStr (n, s) {
    let result = '';
    for(i = 0; i < n; i++){
        result+= s;
    } 
return result;
}

// The squareSum function takes all the elements of the given array and returns them squared up in a new array
function squareSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
      sum+= numbers[i] ** 2;
    }
    return sum;
} 

// The grasshopperSummation returns the sum of n natural (n(n+1)/2).
var grasshopperSummation = function (num) {
    let result = (num * (num + 1))/2;
    return result;
}
  
// The noSpace function splits a string by his spaces and then joins all its characters together.
function noSpace(x){ 
    return x.split(' ').join('');
}

// The findSmallestInt returns the smallest integer from an array by assuming that the first element is the smallest
// and comparing it with the rest of the elements.
function findSmallestInt(args) {
    let smallestInt = args[0];
    for(let i = 0; i < args.length; i++){
      if(args[i] < smallestInt){
        smallestInt = args[i];
      }
    }
    return smallestInt;
  }

// The countSheep counts the true values of a given array.
function countSheeps(arrayOfSheep) {
    let count = 0;
    for(let i = 0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i] === true){
        count++;
      }
    } return count;
}

// The litres function returns a rounded down multiplication.
function litres(time){
    a = 0.5;
    return Math.floor(a * time);
}

// The basicOp takes the four basic math operation and two values and returns their result.
function basicOp(operation, value1, value2) {
    if (operation === '+') {
      return value1 + value2;
    }
    if (operation === '-') {
      return value1 - value2;
    }
    if (operation === '*') {
      return value1 * value2;
    }
    if (operation === '/') {
      return value1 / value2;
    }
}


// The century function takes a year and returns the century that year is from.
function century(year) {
    let century = Math.floor(year/100);
    if(year % 100 !== 0){
      century += 1;
    }
    return century;
}

// The abbrevName function takes a full name, splits it into two names and returns the uppercase first chars of each of them.
function abbrevName(name){
    const names = name.split(' ');
    const firstName = names[0];
    const secondName = names[1];
    const abbrev = firstName[0] + '.' + secondName[0];
    const toUpperCase = abbrev.toUpperCase();

    return toUpperCase;
}

// The stringToNumber function takes a string and turns it into a number.
const stringToNumber = function(str){
    const num = parseInt(str);
    return num;
}

// The isDivisible function checks if an integer is divisible by two divisors examining its digits. 
function isDivisible(n, x, y) {
    if(n % x == 0 && n % y == 0){
      return true;
    } else {
      return false;
    }
}

// The digitize function stringifies a number, divides it and turns it back into numbers into an array of chars, 
// returning the reverse of the initial number.
function digitize(n) {
    const digits = String(n).split('').map(Number);
    return digits.reverse();
}

// The greet function takes a string and returns it as part of another string.
function greet(name){
    return `Hello, ${name} how are you doing today?`;
}

// The findNeedle function checks for a specific element in an array and returns its position.
function findNeedle(haystack) {
    for(let i = 0; i < haystack.length; i++){
      if(haystack[i] === 'needle'){
        return "found the needle at position" + ' ' + i;
      }
    }
}

// The maps function applies a function that doubles each element in an array.
function maps(x){
    return doubled = x.map(y => y * 2);
}

// The lovefunc returns the compatibility of two flowers based on their petal count returning true is they are different
// and fale if they are the same.
function lovefunc(flower1, flower2){
    if(flower1 % 2 === 0 && flower2 % 2 !== 0){
      return true;
    }
    if(flower1 % 2 !== 0 && flower2 % 2 === 0){
      return true;
    }
    if(flower1 % 2 === 0 && flower2 % 2 === 0){
      return false;
    }
    if (flower1 % 2 !== 0 && flower2 % 2 !== 0) {
      return false;
    }
}

// The booleanToString takes a boolean value and returns it as a string.
function booleanToString(b){
    return JSON.stringify(b);
}

// The past function takes the hours, minutes and seconds, turns them into millieseconds and returns their sum.
function past(h, m, s){
    const milliesecondsFromSecond = 1000 * s;
    const milliesecondsFromMinutes = 60000 * m;
    const milliesecondsFromHours = 3600000 * h;
    return milliesecondsFromSecond + milliesecondsFromMinutes + milliesecondsFromHours;
  }

// The paperwork function mulitplies two numbers if both of them are greater than 0;
function paperwork(n, m) {
    if (n > 0 && m > 0) {
      return n * m;
    }
    if (n > 0 && m <= 0) {
      return 0;
    }
    if (n <= 0 && m > 0) {
      return 0;
    }
    if (n <= 0 && m <= 0) {
      return 0;
    }
}

// The invert function turns all the elements of an array into their inverted value.
function invert(array) {
    return array.map(x => x * -1);
}

// The areYouPlayingBanjo checks whether the first character of a name is lowercase or uppercase 'r' and returns that name;
function areYouPlayingBanjo(name) {
  if(name[0] === "R" || name[0] === "r"){
    return name + " plays banjo";
    } else {
    return name + " does not play banjo";
    }
}

// The findAverage function returns the math average of all elements of an array.
function findAverage(array) {
  let count = 0;
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    count++;
    sum+= array[i];
  }
  if(count === 0){
    return 0;
  }
  return sum / count;
}

// The betterThanAverage function checks whether a number(yourPoints) is bigger that the math average of an array.
function betterThanAverage(classPoints, yourPoints) {
  let count = 0;
  let sum = 0;
  for(let i = 0; i < classPoints.length; i++){
    count++;
    sum+= classPoints[i];
  }
  let averagePoints = sum / count;
  if(yourPoints > averagePoints){
    return true;
  } else {
    return false;
  }
}

// The sum function returns the sum of all the elements from an array.
function sum (numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum+= numbers[i];
  }
  if(sum === 0){
    return 0;
  }
  return sum;
};

// The check function checks if an element x is part of an array a.
function check(a, x) {
  for(let i = 0; i < a.length; i++){
    if(a[i] === x){
      return true;
    } 
  }
  return false;
}

