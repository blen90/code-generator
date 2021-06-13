// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  // Choices 
  var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
  var lowerCase = ("abcdefghijklmnopqrstuvwxyz").split("");
  var number = ("0123456789").split("");
  var specialCharacter = ("!@#$%^&*()_-.,").split("");
  var allCharacters = [];

  // Windows to confirm choices

  var charCount = window.prompt("How many characters do you want your password to be?");

  console.log(charCount);

  var upCase = window.confirm("Would you like to use uppercase letters in your password?");

  console.log(upCase);

  var lowCase = window.confirm("Would you like to use lowercase letters in your password?");

  console.log(lowCase);


  var num = window.confirm("Would you like to use numbers in your password?");

  console.log(num);

  var spCharacters = window.confirm("Would you like to use special characters in your password?");

  console.log(spCharacters);

}


function generatePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

}

function stringlength(inputtxt, minlength, maxlength)
{ 
var field = inputtxt.value; 
var mnlen = minlength;
var mxlen = maxlength;

if(field.length<mnlen || field.length> mxlen)
{ 
alert("Please input the userid between " +8+ " and " +128+ " characters");
return false;
}
else
{ 
alert('Your userid have accepted.');
return true;
}
}
  //passwordText.value = password;
//}



// setup variable for all the choices user picked 

//Compare variables with the ones on 9-11

//if upCase =  "true" then upperCase
//if



  //

//console.log("hey, this button has been clicked")
//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);