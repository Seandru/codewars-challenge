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
 
  