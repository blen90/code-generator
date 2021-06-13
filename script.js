// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  // Choices 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var lowerCase = "abcdefghijklmnopqrstuvwxyz" ;
var number = "0123456789" ;
var specialCharacter = "!@#$%^&*()_-.," ;

// Windows to confirm choices

var charCount = window.prompt ("How many characters do you want your password to be?");

console.log(charCount);

var upCase = window.confirm ("Would you like to use uppercase letters in your password?");

console.log(upCase);

var lowCase = window.confirm ("Would you like to use lowercase letters in your password?");

console.log(lowCase);


var num = window.confirm ("Would you like to use numbers in your password?");

console.log(num);

var spCharacters = window.confirm ("Would you like to use special characters in your password?");

console.log(spCharacters);

// setup variable for all the choices user picked 

//Compare variables with the ones on 9-11

if upCase =  "true" then upperCase
if

//var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

  console.log("hey, this button has been clicked")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//var possibleChoices = ["r", "p", "s"];
//Math.floor(Math.random()*possibleChoices.length)