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