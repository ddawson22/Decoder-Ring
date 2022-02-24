// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6



const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const encoder = { a: '11', b: '21', c: '31', d: '41', e: '51', f: '12', g: '22', h: '32', i: '42', j: '42', k: '52', l: '13', m: '23', n: '33', o: '43', p: '53', q: '14', r: '24', s: '34', t: '44', u: '54', v: '15', w: '25', x: '35', y: '45', z: '55' };
  const decoder = { '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e', '12': 'f', '22': 'g', '32': 'h', '42': '(i/j)', '52': 'k', '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p', '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z' };



  function polybius(input, encode = true) {
    
    let result = '';//variable to hold empty string 
    let message = input.toLowerCase();//Set message(input) as lowercase

    if (!encode && input.replace(/\s+/g, '').length % 2 > 0) {
      return false;
    }

    if (encode) {
      let tempWordArr = message.split(' ');
      let encoded = [];

      console.log("Temp Word Arr: " + tempWordArr);
      for (const word of tempWordArr) { //loops through the tempWordArr variable
        for (let i = 0; i < word.length; i++) {//loops through the word
          let character = word[i]
          encoded.push(encoder[character]);
        }

        result += `${encoded.join("")} `;//Result will be added to encoded and joined with a string
        encoded = [];//An empty array to hold the encoded message
      }
      console.log("Result: " + result);//Console logs the result string + the result

      return result.slice(0, -1); // Returning the result and removing the extra space at the end
    }

//decoder
let tempWordArr = message.split(' ');//splits the message
    let decoded = [];//creates an empty array to hold decoded messages

    console.log("Temp Word Arr: " + tempWordArr);//console logs the variable string + the variable
    for (const word of tempWordArr) { // loops through the variable tempwordarr
      for (let i = 0; i < word.length; i += 2) {
        let number = `${word[i]}${word[i+1]}`//creates a variable that contains a temp literal for word, word + 1
        decoded.push(decoder[number]);//pushes decoded onto the decoder
      }

      result += `${decoded.join("")} `;//Result will be added to decoded and joined with a string
      decoded = [];
    }
    console.log("Result: " + result);//Console logs the result string + the result

    return result.slice(0, -1);// Returning the result and removing the extra space at the end

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };



  
  
   

