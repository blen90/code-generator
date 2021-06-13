// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  // Choices 
  var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
  var lowerCase = ("abcdefghijklmnopqrstuvwxyz").split("");
  var number = ("0123456789").split("");
  var specialCharacter = ("!@#$%^&*()_-.,").split("");


  // Windows to confirm choices

  var passLength = window.prompt("How long would you like your password to be? The password should be between 8 and 128 characters.");

  console.log(passLength);


  var upperLetter= window.confirm("Would you like to use uppercase letters in your password?");

  console.log(upperLetter);

  var lowerLetter = window.confirm("Would you like to use lowercase letters in your password?");

  console.log(lowerLetter);


  var num = window.confirm("Would you like to use numbers in your password?");

  console.log(num);

  var spCharacters = window.confirm("Would you like to use special characters in your password?");

  console.log(spCharacters);



  var optionSelection = "";
  console.log(optionSelection);



if (passLength => 8 && passLength <= 128) {
  if("upperLetter === true") {
    optionSelection.upperCase;
  }
  if("lowerLetter === true") {
    optionSelection.lowerCase;
  }

  if("num === true") {
    optionSelection.number;
  }

  if("spCharacter === true") {
    optionSelection.specialCharacter;
  }

var optionSelection = ["upperCase", "lowerCase", "number", "specialCharacter"];
Math.floor(Math.random()*optionSelection.length)

}

//function generatePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

//}


  //passwordText.value = password;
//}



// setup variable for all the choices user picked 

//Compare variables with the ones on 9-11

//if upCase =  "true" then upperCase
//if



  //

//console.log("hey, this button has been clicked")
//}

// Add event listener to generate button generateBtn.addEventListener("click", writePassword)

//
}
