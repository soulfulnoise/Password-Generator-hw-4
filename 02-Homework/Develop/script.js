// Assignment Code
var generateBtn = document.querySelector("#generate");
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  alert("Lets Get Secure!!!")
  var passwordLength = prompt("Password should be a min of 8 characters")
  if (passwordLength < 8){
    alert("You have entered a number less then 8 please try again");

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


