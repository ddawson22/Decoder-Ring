// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const message = input.toLowerCase();
    let result = '';

  
    if(!alphabet || alphabet.length !== 26) return false;  // Check if an alphabet is being passed in or if it is exactly 26 characters
    

    let anyDuplicates = new Set(alphabet)    // Check if 'alphabet' has any repeated character
    if ([...anyDuplicates].length !== 26) return false;

    if(encode){
      for(const currChar of message){
        let currCharIndex = abc.indexOf(currChar);
  
       
        if(currChar.match(/[a-z]/)){ // Check if the current value is a letter, then code/decode
          result += alphabet[currCharIndex];
        
        
        }else{// Else just add the current character to the resulting string without any changes
          result += currChar;
        }
      }
      return result;
    }

    for(const currChar of message){
      let currCharIndex = alphabet.indexOf(currChar);

      
      if(!currChar.match(/\s+/g)){// Check if the current value is a letter, then code/decode
        result += abc[currCharIndex];
      
      
      }else{// Else just add the current character to the resulting string without any changes
        result += currChar;
      }
    }

    return result;

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
