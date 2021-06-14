// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  console.log("hey, this button has been clicked")

  // Choices
  
  var options = {
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase = "abcdefghijklmnopqrstuvwxyz",
  number = "0123456789",
  specialCharacter = "!@#$%^&*()_-.,",
}


  // Windows to confirm choices

  var passLength = window.prompt("How long would you like your password to be? The password should be between 8 and 128 characters.");

  console.log(passLength);


  var upperLetter = window.confirm("Would you like to use uppercase letters in your password?");

  console.log(upperLetter);

  var lowerLetter = window.confirm("Would you like to use lowercase letters in your password?");

  console.log(lowerLetter);


  var num = window.confirm("Would you like to use numbers in your password?");

  console.log(num);

  var spCharacters = window.confirm("Would you like to use special characters in your password?");

  console.log(spCharacters);

  var optionSelection = "";
  console.log(optionSelection);


  if (passLength >= 8 && passLength <= 128) {
  // } else window.prompt("Did you chosee a number between 8 and 28");
}
    //build one long string w/ all the character types the user has chosen


    var optionSelection = {

    }

    if (upperLetter == true) {
      optionSelection += upperCase;  // uppercase shoulkd probably be a string
    }

    if (lowerLetter == true) {
      optionSelection += optionSelection.lowerCase;
    }

    if (num == true) {
      optionSelection += optionSelection.number;
    }

    if (spCharacter == true) {
      optionSelection += optionSelection.specialCharacter;
    }

    for (var i = 0; i < passwordLength; i++) {
      password += optionSelection.charAt(Math.floor(Math.random() * Math.floor(optionSelection.length -1)));
    }
    
    // now you have one long string with all possible characters
    // "ABCD..abcde..1234"
  /*
    var passLength = Math.floor(Math.random() * optionSelection.length);
  
  
  
    function generatePassword () {
    var password = generatePassword (); 
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  
  }
  
    //
  //}
  
  
  
  // setup variable for all the choices user picked 
  
  //Compare variables with the ones on 9-11
  
  //if upCase =  "true" then upperCase
  //if
  
  
  
    //
  
  //")
  //}
  
  // Add event listener to generate button generateBtn.addEventListener("click", writePassword)
  
  //*/


}
