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