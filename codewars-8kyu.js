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
