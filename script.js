// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  let userPrompt = window.prompt("How many characters would you like your password to have (enter number between 8 and 128)");
  
  do {
    userPrompt = window.prompt("How many characters would you like your password to have (enter number between 8 and 128)");
  } 
  while (userPrompt < 8 || userPrompt > 128);  

  let value = Number(userPrompt);

  let userIncludeUpper = window.confirm("Would you like to include upper case letters (ABCDEFGHIJKLMNOPQRSTUVWXYZ)?");  
  let userIncludeLower = window.confirm("Would you like to include lower case letters (abcdefghijklmnopqrstuvwxyz)?");  
  let userIncludeInt = window.confirm("Would you like to include integers (0123456789)?");  
  let userIncludeSpec = window.confirm("Would you like to include special characters (~!@#$%^&*.?-_+={}()[]|\/<>)?");
     
  do {
    window.alert("You must select at least one category.");
    userIncludeUpper = window.confirm("Would you like to include upper case letters (ABCDEFGHIJKLMNOPQRSTUVWXYZ)?");
    userIncludeLower = window.confirm("Would you like to include lower case letters (abcdefghijklmnopqrstuvwxyz)?");
    userIncludeInt = window.confirm("Would you like to include integers (0123456789)?");
    userIncludeSpec = window.confirm("Would you like to include special characters (~!@#$%^&*.?-_+={}()[]|\/<>)?");
  } 
  while (!userIncludeUpper && !userIncludeLower && !userIncludeInt && !userIncludeSpec);

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
