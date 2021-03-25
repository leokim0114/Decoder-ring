// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let result = "";  
    input = input.toLowerCase();  
    let alph = "abcdefghijklmnopqrstuvwxyz";
    
    if(alphabet == undefined) return false;
    else if(alphabet.length != 26) return false;
    let total = 0;
    for(let i = 0; i < alphabet.length; i++){      
      for(let j = 0; j < alphabet.length; j++){
        if(alphabet[i] == alphabet[j]) total += 1;
      }      
    }
    if(total > 26) return false    
    if(encode){result = encodeFunction(input)}
    else {result = decodeFunction(input)}
    return result;
    
    function encodeFunction(input){
      let result = "";      
      for(let i = 0; i < input.length; i++){ 
        if(input[i].includes(" ")){result += input[i]} 
        else {      
          let hoho = alph.indexOf(input[i])        
          result = result + alphabet[hoho]
        }        
      }
      return result;
    }

    function decodeFunction(input){
      let result = "";
      for(let i = 0; i < input.length; i++){
        if(input[i].includes(" ")){result += input[i]}
        else{
          let haha = alphabet.indexOf(input[i]);
          result = result + alph[haha]
        }
      }      
      return result
    }

  
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
