// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scopezzzz

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(shift === 0 || shift < -25 || shift > 25){return false}
    if(!encode) shift = -shift;
    if(shift < 0) shift += 26;    
    let result = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++){
      let character = input[i];
      let noAlphabet = alphabet.indexOf(character);
      if(noAlphabet === -1){
        result += character;
      } else {
        let shiftedAlphabet = (noAlphabet + (shift)) % alphabet.length;
        result += alphabet[shiftedAlphabet];
      }      
    }
    return result
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;

  // // you can add any code you want within this function scope
  // const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
  // function caesar(input, shift, encode = true) {
  //   // your solution code here
    
  //   if(shift > 25 || shift < -25 || shift === 0){
  //     return false
  //   }    
  //   const shifted = [];
  //   for(let j = 0; j < input.length; j++){
  //     for(let i = 0; i < alphabet.length; i++){

  //           if(input[j]===alphabet[i] && Math.sign(shift)===1){
  //             shifted.push(alphabet[(i+shift) % alphabet.length])
  //           } 
  //           else if (input[j]===alphabet[i] && Math.sign(shift)===-1){
  //             shifted.push(alphabet[(i+(shift) + alphabet.length) % alphabet.length])
  //           }
  //           else if (!shifted.includes(input[j]) && alphabet.indexOf(input[j])===-1){
  //             shifted.push(input[j])
  //           }
            
                 
  //     }
  //   }
  //   return shifted.join("");
  // }
