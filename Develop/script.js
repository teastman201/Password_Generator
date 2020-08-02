// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  userSelectInt = window.confirm("Would you like to include integers (0123456789)?");
  userSelectChar = window.confirm("Would you like to include letters (abcdefghijklmnopqrstuvwxyz)?");
  userSelectSpec = window.confirm("Would you like to include special characters (~`!@#$%^&*().?-_+={}[]|\/:;'<>)?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (userSelectInt) = true {

  }
  

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
