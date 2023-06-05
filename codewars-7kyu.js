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
  
  function accum(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
      result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
      if (i !== s.length - 1) {
        result += '-';
      }
    } 
    return result;
  }
  
  var isSquare = function(n){
    if(Math.sqrt(n) % 1 === 0){
      return true;
    } else {
      return false;
    }
  }
  
  function filter_list(l) {
    let fileteredArray = [];
    for(i = 0; i < l.length; i++){
      if(typeof l[i] !== 'string'){
      let result = fileteredArray.push(l[i]);
      }
    } return fileteredArray;
  }
  
  function isIsogram(str){
    for(i = 0; i < str.toLowerCase().length; i++){
      for(j = i + 1; j < str.toLowerCase().length; j++){
        if(str.toLowerCase()[i] === str.toLowerCase()[j]){
          return false;
        }
      }
    }
    return true;
  }
  function XO(str) {
    let countX = 0;
    let countO = 0;
      for(i = 0; i < str.length; i++){
        if(str[i] === "X" || str[i] === "x"){
          countX++;
        }
        if(str[i] === "O" || str[i] === "o"){
          countO++;
        }
        }
        if(countX === countO){
          return true;
        } else {
          return false;
        }  
  }
  
  function findShort(s) {
    const words = s.split(' ');
    let shortestWord = words[0];
  
    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      if (word.length < shortestWord.length) {
        shortestWord = word;
      }
    }
  
    return shortestWord.length;
  }
  
  function DNAStrand(dna) {
    let result = '';
    const splitDNA = dna.split('');
    
    for (let i = 0; i < splitDNA.length; i++) {
      if (splitDNA[i] === 'A') {
        result += 'T';
      } else if (splitDNA[i] === 'T') {
        result += 'A';
      } else if (splitDNA[i] === 'C') {
        result += 'G';
      } else if (splitDNA[i] === 'G') {
        result += 'C';
      }
    }
    
    return result;
  }
  
  function maskify(cc) {
    const splitString = cc.split('');
    for(i = 0; i < splitString.length - 4; i++){
      splitString[i] = '#';
    }
    return splitString.join('');
  }
  
  function sumTwoSmallestNumbers(numbers) {  
    let firstLowNumber = Infinity;
    let secondLowNumber = Infinity;
    
    for(let i = 0; i < numbers.length; i++){
      if(numbers[i] < firstLowNumber){
        secondLowNumber = firstLowNumber;
        firstLowNumber = numbers[i];
      } else if(numbers[i] < secondLowNumber) {
        secondLowNumber = numbers[i];
      }
    } return firstLowNumber + secondLowNumber;
  }
  
  function sumTwoSmallestNumbers2(numbers){
    numbers = numbers.sort(function(a, b){return a - b;});
    return numbers[0] + numbers[1];
  };

// The getSum function takes two integers and returns the sum of all the integers between and including them.
function getSum(a, b) {
    let sum = 0;
    let min = Math.min(a, b);
    let max = Math.max(a, b);
  
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    
    return sum;
}

// The longest function takes two strings, combines them and filters the duplicated chars
// returning a single string sorted from a-z without repeating chars
function longest(s1, s2) {
    const combinedString = s1 + s2;
    const distinctLetters = Array.from(new Set(combinedString)); 
    return distinctLetters.sort().join(''); 
}

// The friend function takes an array of strings and returns only the elements that have 
// exactly 4 chars.
function friend(friends) {
    let trueFriends = [];
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].length === 4) {
        trueFriends.push(friends[i]);
      }
    }
    return trueFriends;
}
  
// The openOrSenior function takes an array made out of two integers, and returns 
// either Senior or Open based on their value.
function openOrSenior(data){
  return data.map(([age, handicap]) => {
    if (age >= 55 && handicap > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
}

// The findNextSquare function checks if a number is a perfet square and returns the next one
function findNextSquare(sq) {
  let x = Math.sqrt(sq);
  if(Number.isInteger(x)){
    let y = x + 1;
    return y * y;
  } else {
    return-1;
  }
}

// The printerError function returns a counter of chars that are not in the valid range and the length of it 
function printerError(s) {
  let errorCount = 0;
const validRange = /^[a-m]+$/;
for (let i = 0; i < s.length; i++) {
  if (!validRange.test(s[i])) {
    errorCount++;
  }
}
return errorCount + '/' + s.length;
}