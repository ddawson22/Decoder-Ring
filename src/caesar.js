// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const caesarModule = (function() { 
  function caesar(input, shift, encode = true) {
    //your solution code here

if ((!shift) || shift == 0 || shift >25 || shift <-25) {
  return false
}

if (!encode) shift *= -1; //This should invert to return to whatever it was - multiply by -1

message = input.toLowerCase()//ignore case

let final = ""//blank string to store the message

for(let i=0; i<message.length; i++){//looping though message(input)
  let character = message[i]

if (character.match(/[a-z]/)) { //shift on charcode to get the new position - This will ultimately be the coded message

let codedMessage= message.charCodeAt(i)+shift

/*account for going over or under - 
if it is under or over, it would have been in the original. 
Add or minus the "array length" which is the alphabet we need.
122 is the max (z) and 97 is the lowest (a) on the table*/

if (codedMessage > 122) {
  codedMessage = codedMessage - 26;
}
if (codedMessage < 97) {
  codedMessage = codedMessage + 26;
}

let adjustedLetter = String.fromCharCode(codedMessage)//we have the secret letter, so now we plug it back in.
final += adjustedLetter
  }
//push right away without changing the character if it is not within a-z
  else {
    final += character
  }
}

console.log(final);
    return final; //return message  
}

return {
  caesar,
};
})();

module.exports = { caesar: caesarModule.caesar };

