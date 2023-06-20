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