// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let result = "";
    input = input.toLowerCase();
        
    const valueAndKey = {
      "11": "a", "21": "b", "31": "c", "41": "d", "51": "e",
      "12": "f", "22": "g", "32": "h", "42": ["i", "j"],  "52": "k",
      "13": "l", "23": "m", "33": "n", "43": "o", "53": "p",
      "14": "q", "24": "r", "34": "s", "44": "t", "54": "u",
      "15": "v", "25": "w", "35": "x", "45": "y", "55": "z"
    }

    if(encode){result = encodeFunction(input)}
    else{result = decodeFunction(input)}
    return result;

    function encodeFunction (input) {
      let result = "";
      for(let i = 0; i < input.length; i++){
        if(!input[i].match(/[a-z]/)){ result += input[i] }
        for(let key in valueAndKey){
          let alph = valueAndKey[key];
          if(alph.includes(input[i])){ result += key }
        }
      }
      return result;
    }

    function decodeFunction(input){
      let result = "";
      for(let i = 0; i < input.length; i++){

        if(input[i].includes(" ")){result += input[i]}
        else{
          let numInput = input[i] + input[i + 1];
          i = i + 1;        
          if(numInput === "42"){ result += "(i/j)" }
          for(let key in valueAndKey){
            if(numInput === key && numInput !== "42"){ result += valueAndKey[key] }          
          }
        }            
      }
      let even = evenFunction(input);
      if(!even){return false}            
      return result;
    }

    function evenFunction(input){
      let total = 0;
      for(let i = 0; i < input.length; i++){
        if(input[i] !== " "){total += 1}
      }
      if(total % 2 !== 0){return false}
      else{return true}
    }
    


  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
