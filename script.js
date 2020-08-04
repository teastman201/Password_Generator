// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Assigned variables for function.
  var passwordText = document.querySelector("#password");
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var specChar = '~!@#$%^&*?-_+={}()[]|\/<>';
  var possible = '';
  let userPass = '';
  let userPrompt;
  let userIncludeUpper;
  let userIncludeLower;
  let userIncludeInt;
  let userIncludeSpec;

  // Loop to ensure user inputs a value within the selection criteria.
  do {
    userPrompt = window.prompt("How many characters would you like your password to have (enter number between 8 and 128)");
  }
  while (userPrompt < 8 || userPrompt > 128);  

  // Loop to ensure user selects at least one criteria for password.
  do {
    userIncludeUpper = window.confirm("Would you like to include upper case letters (ABCDEFGHIJKLMNOPQRSTUVWXYZ)?");
    userIncludeLower = window.confirm("Would you like to include lower case letters (abcdefghijklmnopqrstuvwxyz)?");
    userIncludeInt = window.confirm("Would you like to include integers (0123456789)?");
    userIncludeSpec = window.confirm("Would you like to include special characters (~!@#$%^&*.?-_+={}()[]|\/<>)?");
    if (!userIncludeUpper && !userIncludeLower && !userIncludeInt && !userIncludeSpec) {
      window.alert("You must select at least one category.");
    }
  }
  while (!userIncludeUpper && !userIncludeLower && !userIncludeInt && !userIncludeSpec);

  // Checks conditions of variables from selection and updates variable with thsoe values.
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

  // Loops through entire length of variable to select random string.
  for (let i = 0; i < userPrompt; i++) {
    userPass += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  // Wasn't sure how to use this variable, so I commented it out.
  // var password = generatePassword();

  // updates the value of the password text with the value stored in userPass.  
  passwordText.value = userPass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
