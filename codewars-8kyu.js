function multiply(a, b){
    return a * b;
}

function positiveSum(arr) {
    let sum = 0;
    for(i = 0 ; i < arr.length ; i++){
      if(arr[i] > 0){
        sum += arr[i];
      }
    }
    return sum;
}

function makeNegative(num) {
    if(num > 0){
      return -num;
    } else {
      return num;
    }
}

function reverseString(str){
    let word = '';
    for(i = str.length - 1; i >= 0; i--){
      word+= str.charAt(i);
    } 
    return word;
}


function boolToWord(bool){
    if(bool !== true){
      return 'No';
    } else {
      return 'Yes';
    } 
}


function numberToString(num) {
    return JSON.stringify(num);
}

function opposite(number) {
    return -number;
}

function removeFirstAndLastChar(str){
    return str.slice(1, -1);
};


function repeatStr (n, s) {
    let result = '';
    for(i = 0; i < n; i++){
        result+= s;
    } 
return result;
}

function squareSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
      sum+= numbers[i] ** 2;
    }
    return sum;
} 

var grasshoperSummation = function (num) {
    let result = (num * (num + 1))/2;
    return result;
}
  
function noSpace(x){ 
    return x.split(' ').join('');
}

function findSmallestInt(args) {
    let smallestInt = args[0];
    for(let i = 0; i < args.length; i++){
      if(args[i] < smallestInt){
        smallestInt = args[i];
      }
    }
    return smallestInt;
  }

function countSheeps(arrayOfSheep) {
    let count = 0;
    for(let i = 0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i] === true){
        count++;
      }
    } return count;
}


function litres(time){
    a = 0.5;
    return Math.floor(a * time);
}

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

function century(year) {
    let century = Math.floor(year/100);
    if(year % 100 !== 0){
      century += 1;
    }
    return century;
}

function abbrevName(name){
    const names = name.split(' ');
    const firstName = names[0];
    const secondName = names[1];
    const abbrev = firstName[0] + '.' + secondName[0];
    const toUpperCase = abbrev.toUpperCase();

    return toUpperCase;
}

const stringToNumber = function(str){
    const num = parseInt(str);
    return num;
}


function isDivisible(n, x, y) {
    if(n % x == 0 && n % y == 0){
      return true;
    } else {
      return false;
    }
}

function digitize(n) {
    const digits = String(n).split('').map(Number);
    return digits.reverse();
}

function greet(name){
    return `Hello, ${name} how are you doing today?`;
}

function findNeedle(haystack) {
    for(let i = 0; i < haystack.length; i++){
      if(haystack[i] === 'needle'){
        return "found the needle at position" + ' ' + i;
      }
    }
}

function maps(x){
    return doubled = x.map(y => y * 2);
}

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

function booleanToString(b){
    return JSON.stringify(b);
}

function past(h, m, s){
    const millisecondsFromSecond = 1000 * s;
    const milliesecondsFromMinutes = 60000 * m;
    const milliesecondsFromHours = 3600000 * h;
    return millisecondsFromSecond + milliesecondsFromMinutes + milliesecondsFromHours;
  }

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

function invert(array) {
    return array.map(x => x * -1);
}

function areYouPlayingBanjo(name) {
  if(name[0] === "R" || name[0] === "r"){
    return name + " plays banjo";
    } else {
    return name + " does not play banjo";
    }
}

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

