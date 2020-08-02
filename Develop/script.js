// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  userSelectInt = window.prompt("Would you like to include integers?");
  userSelectChar = window.prompt("Would you like to include letters?");
  userSelectSpec = window.prompt("Would you like to include special characters?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
