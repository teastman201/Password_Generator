// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
let userPrompt = window.prompt("How many characters would you like your password to have (enter number between 8 and 128)");
let value = Number(userPrompt);
let min = 8;
let max = 128;
function nested(min, max){ 
  for (v = 0; v < min || v > max; v++) {
    window.alert('You must enter a number between 8 and 128.');
  } 
} 
     
  let userIncludeUpper = window.confirm("Would you like to include upper case letters (ABCDEFGHIJKLMNOPQRSTUVWXYZ)?");  
  let userIncludeLower = window.confirm("Would you like to include lower case letters (abcdefghijklmnopqrstuvwxyz)?");  
  let userIncludeInt = window.confirm("Would you like to include integers (0123456789)?");  
  let userIncludeSpec = window.confirm("Would you like to include special characters (~!@#$%^&*.?-_+={}()[]|\/<>)?");

  if (!userIncludeUpper && !userIncludeLower && !userIncludeInt && !userIncludeSpec ) {
    window.alert("You must select select at least one option.");
  }

  var passwordText = document.querySelector("#password");
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var specChar = '~!@#$%^&*.?-_+={}()[]|\/<>';
  var possible = '';
  
  let userPass = '';
  
  if (userIncludeUpper) {
    possible += upperCase;
  }

  if (userIncludeLower) {
    possible += lowerCase;
  }

  if (userIncludeInt) {
    possible += numbers;
  }
  if (userIncludeSpec) {
    possible += specChar;
  }
  
  for (let i = 0; i < userPrompt; i++) {
    userPass += possible.charAt(Math.floor(Math.random() * possible.length));
  }  


//var password = generatePassword();
 
passwordText.value = userPass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);