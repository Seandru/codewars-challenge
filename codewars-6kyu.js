// The solution function returns the sum of all multiples of 3 and 5 below a given number
function solution(number){
    if (number < 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 3; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
}

// The spinWords function returns the given string with every word that has a length greater
// or equal to 5 characters, reversed.
function spinWords(string) {
    return string.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word ).join(' ');
}

// The digitalRoot function returns the sum of all the digits in a number. 
function digitalRoot(n) {
  while (n >= 10) {
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    n = sum;
  }
  return n;
}

// The function checks the length of the given array and 
// generates a string output based on the number of elements in the array.
function likes(names) {
  if(names.length === 0){
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${(names.length - 2)} others like this`;
  }
}

// The arrayDiff function iterates over each element of a given array, and checks if it exists
// in the second given array. If it's a match the first array is returned without the matching element.
function arrayDiff(a, b) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (b[j] === a[i]) {
        a.splice(i, 1);
        i--;
      }
    }
  }
  return a;
}

// The createPhoneNumber function takes a number, turns it into a string and returns a string made out of 
// the number digits.
function createPhoneNumber(numbers){
  const numbersToString = numbers.toString;
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

// The countBits function returns the number of bits that are equal to 1 in the binary representation.
var countBits = function(n) {
  let binaryN = n.toString(2);
  let result = 0;
  for (let i = 0; i < binaryN.length; i++) {
    if (binaryN[i] === '1') {
      result += 1;
    }
  }
  return result;
};

// The findOutliner returns the only odd or even number of an array.
function findOutlier(integers) {
  const evenIntegers = [];
  const oddIntegers = [];
  
  for(let num of integers){
    if(num % 2 === 0){
      evenIntegers.push(num);
    } else {
      oddIntegers.push(num);
    }
  }
  return evenIntegers.length === 1 ? evenIntegers[0] : oddIntegers[0];
}

// The duplicateCount function counts the occurance of repeated characters in a given string
function duplicateCount(text) {
  text = text.toLowerCase();
  let count = 0;
  let charCount = {};
  for (let char of text) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char in charCount) {
    if (charCount[char] > 1) {
      count++;
    }
  }
  return count;
}

//The duplicateEncode function convers a character to "(" if it appears only once
// or ")" if it appears more than once.
function duplicateEncode(word) {
  word = word.toLowerCase();
  let charCount = {};
  let encoded = '';
  for (let char of word) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of word) {
    if (charCount[char] > 1) {
      encoded += ')';
    } else {
      encoded += '(';
    }
  }
  return encoded;
}