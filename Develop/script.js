// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  userPrompt = window.prompt("How long would you like your password to be (enter number between 8 and 128)");

  userSelectInt = window.confirm("Would you like to include integers (0123456789)?");
  // userSelectChar = window.confirm("Would you like to include letters (abcdefghijklmnopqrstuvwxyz)?");
  userSelectSpec = window.confirm("Would you like to include special characters (~`!@#$%^&*().?-_+={}[]|\/:;'<>)?");

  intArray = "0123456789";

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (userSelectInt) {

  }
  

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
