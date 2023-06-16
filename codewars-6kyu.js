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

// The function isValidWalk checks if a given array of directions 
// represents a 10-minute walk returning to the starting point.
function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  let count = {
    n: 0,
    s: 0,
    e: 0,
    w: 0
  };

  for (let direction of walk) {
    count[direction]++;
  }
  return count.n === count.s && count.e === count.w;
}

// The alphabetPosition function takes a string as input and 
// returns a new string where each letter is replaced with its corresponding position in the alphabet.
function alphabetPosition(text) {
  const textLowerCase = text.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for(let i = 0; i < text.length; i++){
    const character = textLowerCase.charAt(i);
    const position = alphabet.indexOf(character);

    if(position !== -1){
    result+= (position + 1) + ' ';
      }
  }
  return result.trim();
}

// The persistence function calculates the multiplicative persistence of a number by 
// multiplying its digits until in becomes a single digit number
function persistence(num) {
  let count = 0;
  while(num >= 10){
    num = num.toString().split('').map(Number).reduce((a, b) => a * b);
    count++;
  }
  return count;
}

// The order function orders words from a given string, by the digits that are included in the words
// ex: "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
function order(words) {
  const wordsArray = words.split(' ');
  return wordsArray.sort((a, b) => {
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}

// The function toCamelCase splits the input string into words, capitalizes the first character 
// of each word except the first one, and joins them together to form a camel-cased string
function toCamelCase(str){
  const words = str.split(/[-_]/);
  let result = words.map((word, index) => {
    if (index === 0) {
      return word;
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  });
  return result.join('');
}

// The tribonacci function generates a sequence based on the fibonacci sequence
function tribonacci(signature,n){
  if(n === 0){
    return [];
  }
  let sequence = signature.slice();
  for (let i = 3; i < n; i++) {
    const nextElement = sequence[i - 1] + sequence[i - 2] + sequence[i - 3];
    sequence.push(nextElement);
  }
  return sequence.slice(0, n);
}


// The narcissistic function checks if a given number is a narcissistic number
// ex: 153 = 1^3 + 5^3 + 3^3 = 153
function narcissistic(value) {
  const arr = Array.from(String(value), Number);
  const result = arr.reduce((sum, digit) => sum + Math.pow(digit, arr.length), 0);
  return result === value;
}

// The uniqueInOrder function return an array without any similar elements next to each other
function uniqueInOrder(iterable) {
  if (!Array.isArray(iterable)) {
    iterable = Array.from(iterable);
  }
  return iterable.filter((item, index) => item !== iterable[index - 1]);
}

// The digPow function finds if there is an integer k
// that satisfies this:(a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
function digPow(n, p) {
  const digits = Array.from(String(n), Number);
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(digits[i], p + i);
  }
  const k = sum / n;
  return Number.isInteger(k) ? k : -1;
}

//The isPangram function checks whether a string has all the letters of the alphabet
// inside it at least once.
function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowercaseString = string.toLowerCase();
  return Array.from(alphabet).every(letter => lowercaseString.includes(letter));
}

// The findUniq function checks if there is a number that is not equal to the rest of the array
function findUniq(arr) {
  let uniqueElement;
  arr.forEach((element) => {
    if (arr.indexOf(element) === arr.lastIndexOf(element)) {
      uniqueElement = element;
    }
  });
  return uniqueElement;
}

// The solution function splits a string into pairs, and if the string is of odd length
// the last pair will be [character, '_']
function solution(str) {
  const pairs = [];
  for (let i = 0; i < str.length; i += 2) {
    const pair = str.slice(i, i + 2);
    if(pair.length === 1) {
      pairs.push(pair + '_');
    } else {
      pairs.push(pair);
    }
  }
  return pairs;
}

// The sortArray function sorts the odd numbers in ascending order while leaving the even numbers in 
// their original position
function sortArray(array) {
  const oddNumbers = array.filter(num => num % 2 !== 0);
  oddNumbers.sort((a, b) => a - b);
  let i = 0;
  return array.map(num => {
    if (num % 2 !== 0) {
      const oddNum = oddNumbers[i];
      i++;
      return oddNum;
    } else {
      return num;
    }
  });
}

// The findMissingLetter function returns the missing letter of an array that contains letters
// consecutive letters
function findMissingLetter(array) {
  let missingLetter = '';
  array.forEach((letter, index) => {
    if (index < array.length - 1) {
      const currentCharCode = letter.charCodeAt(0);
      const nextCharCode = array[index + 1].charCodeAt(0);
      if (nextCharCode - currentCharCode > 1) {
        missingLetter = String.fromCharCode(currentCharCode + 1);
      }
    }
  });
  return missingLetter;
}

// The towerBuilder function returns an array of strings in the form of a pyramid
// with the max width equal to the nFloors.
function towerBuilder(nFloors) {
  const tower = [];
  let width = nFloors * 2 - 1;
  let spaces = Math.floor(width / 2);
  for (let i = 0; i < nFloors; i++) {
    let level = '';
    for (let j = 0; j < width; j++) {
      if (j < spaces || j >= width - spaces) {
        level += ' ';
      } else {
        level += '*';
      }
    }
    tower.push(level);
    spaces--;
  }
  return tower;
}

// The high function splits the input into words, calculates the score for each
// word based on the position of its letters in the alphabet and returns the word with the 
// highest score.
function high(x) {
  const words = x.split(' ');
  let maxScore = 0;
  let highestWord = '';
  words.forEach(word => {
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      score += word.charCodeAt(i) - 96; 
    }
    if (score > maxScore) {
      maxScore = score;
      highestWord = word;
    }
  });
  return highestWord;
}

