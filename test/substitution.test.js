// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests written by the Student:", () => {
   
    describe("Error Handling:", () =>{
       it("Should return false if the alphabet value is not present", () =>{
           const actual = substitution("thinkful");
           expect(actual).to.be.false;
       });
       it("Should return false if the alphabet is less than 26", () =>{
            const actual = substitution("thinkful", "short");
            expect(actual).to.be.false;
        });
        
        it("should return false if the inputted alphabet has duplicate characters", () => {
            const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
            expect(actual).to.be.false;
          })
         
   });

});