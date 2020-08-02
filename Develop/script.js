// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword(length) {

  userPrompt = window.prompt("How many characters would you like your password to have (enter number between 8 and 128)");
  userIncludeInt = window.confirm("Would you like to include integers (0123456789)?");  
  userIncludeSpec = window.confirm("Would you like to include special characters (~!@#$%^&*.?-_+={}()[]|\/<>)?");

  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var specChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*.?-_+={}()[]|\/<>';
  var numbers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  let numPass = '';
  let specPass = '';

  if (userIncludeInt && userIncludeSpec) {
    for (let i = 0; i < userPrompt; i++) {
      numPass += specChar.charAt(Math.floor(Math.random() * specChar.length));
    }
  } else {
    for (let i = 0; i < userPrompt; i++) {
      numPass += letters.charAt(Math.floor(Math.random() * letters.length));
  }
}

  if (userIncludeSpec) {
    for (let i = 0; i < userPrompt; i++) {
      specPass += specChar.charAt(Math.floor(Math.random() * specChar.length));
    }
  } else {
    for (let i = 0; i < userPrompt; i++) {
      numPass += letters.charAt(Math.floor(Math.random() * letters.length));
    }
  }

  if (userIncludeInt) {
    for (let i = 0; i < userPrompt; i++) {
      specPass += specChar.charAt(Math.floor(Math.random() * specChar.length));
    }
  } else {
    for (let i = 0; i < userPrompt; i++) {
      numPass += letters.charAt(Math.floor(Math.random() * letters.length));
    }
  }
  
    /*
  if (userIncludeInt) {
    for ( var i = 0; i < userPrompt; i++ ) {
      value1 = numbers.charAt(Math.floor(Math.random() * userPrompt));
   }
  }

  if (userIncludeSpec) {
    for ( var s = 0; s < specChar.length; s++ ) {
      value2 = specChar.charAt(Math.floor(Math.random() * specChar.length));
   }
  }

  if (userIncludeInt && userIncludeSpec) {
    for ( var a = 0; a < allChar.length; a++ ) {
      value3 = allChar.charAt(Math.floor(Math.random() * allChar.length));
 }
}
*/ 

console.log(numPass);
console.log(specPass);

  //var password = generatePassword();
 // var passwordText = document.querySelector("#password");
 
 // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
