// The moveZeros function separates the '0' from the rest of the array and 
// returns a new array with the zeros at the end of it.
function moveZeros(arr) {
    const zeros = [];
    const notZeros = [];
    arr.forEach((element) => {
      if(element === 0){
        zeros.push(element); 
      } else {
        notZeros.push(element);
      }
    });
    return notZeros.concat(zeros);
}

// The pigIt function takes a string, reverses and adds 'ay'
// at the end of each word except punctuation marks.
function pigIt(str) {
    const words = str.split(' ');
    const pigLatinWords = words.map((word) => {
      if (/^[A-Za-z]+$/.test(word)) {
        const firstLetter = word[0];
        const restOfWord = word.slice(1);
        return restOfWord + firstLetter + 'ay';
      } else {
        return word;
      }
    });
    
    return pigLatinWords.join(' ');
}

// The humanReadable function converts seconds to hours, minutes and seconds, 
//then it returns them into this format: HH:MM:SS
function humanReadable (seconds) {
    const readableHours = Math.floor(seconds / 3600);
    const readableMinutes = Math.floor((seconds % 3600) / 60)
    const readableSeconds = seconds % 60;
    
    const digitHours = readableHours < 10 ? '0' + readableHours : readableHours;
    const digitMinutes = readableMinutes < 10 ? '0' + readableMinutes : readableMinutes;
    const digitSeconds = readableSeconds < 10 ? '0' + readableSeconds : readableSeconds;
    
    return `${digitHours}:${digitMinutes}:${digitSeconds}`;
}

// The rgb function converts the red, green and blue variables into 
// their hex code variables.
function rgb(r, g, b){
  const range = (value) => Math.max(0, Math.min(255, Math.round(value)));
  let redHex = range(r).toString(16).padStart(2, '0').toUpperCase();
  let greenHex = range(g).toString(16).padStart(2, '0').toUpperCase();
  let blueHex = range(b).toString(16).padStart(2, '0').toUpperCase();
  
  return `${redHex}${greenHex}${blueHex}`;
}

// The dirReduc function takes an array of directions and returns a simplified version 
// of the path by removing needless opposite directions that appear side by side.
function dirReduc(arr){
  const oppositeDirections = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };
  const reducedPath = [];
  arr.forEach(element => reducedPath[reducedPath.length -1] === oppositeDirections[element] ? 
              reducedPath.pop() : reducedPath.push(element));
  return reducedPath;
}

// The rot13 function ciphers a string using the ROT13, where it replaces a letter with
// the letter 13 letters after it in the alphabet.
function rot13(message) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const convertedMessage = Array.from(message).map(char => {
    if (alphabet.includes(char.toLowerCase())) {
      const index = alphabet.indexOf(char.toLowerCase());
      const newIndex = (index + 13) % 26;
      const convertedChar = char === char.toLowerCase() ? alphabet[newIndex] : alphabet[newIndex].toUpperCase();
      return convertedChar;
    } else {
      return char;
    }
  });
  return convertedMessage.join('');
}

// The generateHashtag function takes a tr and turns it into a hashtag
// slicing the empty spaces, capitalizing the first character and adding a # and the start of it.
function generateHashtag(str) {
  if (str.trim() === '') { 
    return false;
  }
  const words = str.trim().split(' ');
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const hashtag = '#' + capitalizedWords.join('');
  if (hashtag.length > 140) {
    return false;
  }
  return hashtag;
}

// The cakes function takes a recipe object and an available ingredients object, iterates over the recipe ingredients
// calculates the maximum number of cakes that can be made based on the available ingredients and returns the result
function cakes(recipe, available) {
  let maxCakes = Infinity; 
  for (const ingredient in recipe) {
    if (available.hasOwnProperty(ingredient)) {
      const requiredAmount = recipe[ingredient];
      const availableAmount = available[ingredient];
      const possibleCakes = Math.floor(availableAmount / requiredAmount);
      maxCakes = Math.min(maxCakes, possibleCakes);
    } else {
      return 0;
    }
  }
  return maxCakes;
}

// The firstNonRepeatingLetter returns the first character that appears only once in the given string
function firstNonRepeatingLetter(s) {
  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i].toLowerCase();
    if (s.toLowerCase().indexOf(currentChar) === s.toLowerCase().lastIndexOf(currentChar)) {
      return s[i];
    }
  }
  return "";
}

// The function domainName returns only the domain name from a given url.
function domainName(url) {
  let domain = url.replace(/^(https?:\/\/)?(www\.)?/, '');
  if (domain.startsWith('www.')) {
    domain = domain.slice(4);
  }
  if (domain.indexOf('.') !== -1) {
    domain = domain.slice(0, domain.indexOf('.'));
  }
  return domain;
}

// The incrementString function takes a string and if it ends with a number it will increment it by 1,
// if not, it will append 1 to the end of the new string.
function incrementString (strng) {
  const digits = strng.match(/\d+$/);
  if(digits === null){
    return strng + '1';
  } else {
    const incremented = String(Number(digits[0]) + 1);
    const padString = incremented.padStart(digits[0].length, '0');
    return strng.replace(/\d+$/, padString);
  }
}

// The score function calculates the score for a dice throw counting the occurrences
// of each number, applying the scoring rules and returning the score.
function score( dice ) {
  let six = 0;
  let five = 0;
  let four = 0; 
  let three = 0; 
  let too = 0;
  let one = 0;
  let i = 0;
  while (i < 5) {
    if (dice[i] == 6) {
      six++;
    }
    if (dice[i] == 5) {
      five++; 
    }
    if (dice[i] == 4) {
      four++; 
    }
    if (dice[i] == 3) {
      three++; 
    }
    if (dice[i] == 2) {
      too++; 
    }
    if (dice[i] == 1) {
      one++; 
    }
    i++;
  }
  let r = 0;
  if (one > 2) {
    r += 1000; one -= 3;
  }
  if (six > 2) {
    r += 600;
  }
  if (five > 2) {
    r += 500; five -= 3;
  }
  if (four > 2) {
    r += 400; 
  }
  if (three > 2) {
    r += 300; 
  }
  if (too > 2) {
    r += 200; 
  }
  r += one * 100;
  r += five * 50;
  return r;
}

// The function zeros counts the number of trailing zeros in the factorial of 
// a given number by iteratively dividing the number by 5 and summing up the quotients.
function zeros (n) {
  let count = 0;
  while(n > 0){
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}

// The function perimeter calculates the sum of the perimeters of all the squares by 
// iterating through the Fibonacci sequence and returning the perimeter multiplied by 4
function perimeter(n) {
  if (n <= 0) return 4;

  let sum = 2;
  let a = 1;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const current = a + b;
    sum += current;
    a = b;
    b = current;
  }

  return sum * 4;
}

// The primeFactors function calculates the prime factor decomposition of a given integer
// and refactors it in a string with the following form: "(p1**n1)(p2**n2)...(pk**nk)"
function primeFactors(n) {
  let factors = [];
  let divisor = 2;

  while (n > 1) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    } else {
      divisor++;
    }
  }

  let result = "";
  let count = 1;

  for (let i = 0; i < factors.length; i++) {
    if (factors[i] !== factors[i + 1]) {
      result += `(${factors[i]}${count > 1 ? `**${count}` : ""})`;
      count = 1;
    } else {
      count++;
    }
  }

  return result;
}

// The function listSquared takes a range of numbers, finds the divisors, sums their squared values
// and returns an array where the first number is the squared divisors of which is a square and 
// then the sum of the squared divisors.
function listSquared(m, n) {
  const results = [];

  for (let num = m; num <= n; num++) {
    const divisors = [];
    let sumOfSquares = 0;

    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisors.push(i);

        if (i !== num / i) {
          divisors.push(num / i);
        }
      }
    }

    divisors.forEach((divisor) => {
      sumOfSquares += divisor * divisor;
    });

    const sqrt = Math.sqrt(sumOfSquares);
    if (sqrt === Math.floor(sqrt)) {
      results.push([num, sumOfSquares]);
    }
  }
  return results;
}

// The sumPairs function returns the smallest index numbers that when 
// added up, they equal the given s
function sumPairs(ints, s) {
  const visited = {};
  
  for (let i = 0; i < ints.length; i++) {
    const complement = s - ints[i];
    if (visited.hasOwnProperty(complement)) {
      return [complement, ints[i]];
    }
    visited[ints[i]] = true;
  }
  return undefined;
}

// The pickPeaks function finds and returns the positions and values of peaks in a given array
// considering plateaus as peaks as well
function pickPeaks(arr) {
  const pos = [];
  const peaks = [];
  for(let i = 1; i < arr.length - 1; i++) {
    if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      pos.push(i);
      peaks.push(arr[i]);
    } else if (arr[i] > arr[i - 1] && arr[i] === arr[i + 1]) {
      let plateauEnd = i + 1;
      while(plateauEnd < arr.length && arr[plateauEnd] === arr[i]) {
        plateauEnd++;
      }
      if(arr[plateauEnd] < arr[i]) {
        pos.push(i);
        peaks.push(arr[i]);
      }
      i = plateauEnd - 1;
    }
  }
  return { pos, peaks };
}


class PaginationHelper {
	constructor(collection, itemsPerPage) {
	  this.collection = collection;
    this.itemsPerPage = itemsPerPage;
	}
// returns total number of items
	itemCount() {
	  return this.collection.length;
	}
// return total number of pages
	pageCount() {
	 return Math.ceil(this.collection.length / this.itemsPerPage);
	}
// returns items on a page
	pageItemCount(pageIndex) {
	  if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1;
    } else if (pageIndex === this.pageCount() - 1) {
      return this.collection.length % this.itemsPerPage;
    } else {
      return this.itemsPerPage;
    }
	}
// returns index of item on a page
	pageIndex(itemIndex) {
	  if (itemIndex < 0 || itemIndex >= this.itemCount()){
      return -1;
    } else {
      return Math.floor(itemIndex / this.itemsPerPage);
    }
	}
}

