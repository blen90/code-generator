// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  console.log("hey, this button has been clicked")

  // Preferences

  var finalPassword = "";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var specialCharacter = "!@#$%^&*()";


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


    if (upperLetter === true) {
      optionSelection += upperCase;  // uppercase should probably be a string
      console.log(optionSelection);
    }

    if (lowerLetter === true) {
      optionSelection += lowerCase;
      console.log(optionSelection);
    }

    if (num === true) {
      optionSelection += number;
      console.log(optionSelection);
    }

    if (spCharacters === true) {
      optionSelection += specialCharacter;
      console.log(optionSelection);
    }

    for (var i = 0; i < passLength; i++) {
      var password = optionSelection.charAt(Math.floor(Math.random() * Math.floor(optionSelection.length - 1)));
      finalPassword += password;
      console.log(finalPassword);
    }


    document.getElementById("password").textContent = "This is your secure password:  " + finalPassword

  } else {
    window.confirm("That didn't work... Did you chosee the correct number of characters between 8 and 128?");
    clearContent();
  }

}
