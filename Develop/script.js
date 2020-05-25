// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var speChar = "~!@#$%^&*()-=+?";
var passlength = 0;
var tempPass = " ";
var mypassword = " ";

// Write password to the #password input
function writePassword() {

  var askupperCase = confirm ( "Do you want uppercase characters?" );
    if (askupperCase==true) {
      tempPass += upperCase;
      console.log (tempPass);
    }
  var asklowerCase = confirm ( "Do you want lowercase characters?");
    if (asklowerCase==true) {
      tempPass += lowerCase;
      console.log (tempPass);
    }
  var asknumber = confirm ( "Do you want numeric characters?" );
    if (asknumber==true) {
      tempPass += number;
      console.log (tempPass);
    }
  var askspeChar = confirm ( "Do you want special Character? (eg.@#!)");
    if (askspeChar==true) {
      tempPass += speChar;
      console.log (tempPass)
    }
  passlength = Number (prompt ( "How many characters do you want? (Between 8-128 characters)" ));
    console.log (passlength);

  if (passlength >= 8 && passlength <= 128) {

      for (var i = 0; i < passlength; i++) {
          mypassword += tempPass[Math.floor(Math.random() * tempPass.length)];
      }
  }

  // var mypassword = generatePassword();

  var passwordText = document.querySelector("#password");  
  passwordText.value = mypassword; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){writePassword()});
