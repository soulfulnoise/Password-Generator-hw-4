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
  var passwordLength = prompt("Password should be a min of 8 characters or a max of 128.")
  
  if(passwordLength > 8 ) {
    alert("You disered character count has been recorded!")
  }

  else
  if (passwordLength < 128){
    alert("You disered character count has been recorded!")
  }

 else
  if (passwordLength < 8){
     alert ("You have entered a number less then 8 please start again.");
     restart (passwordLength = prompt("Password should be a min of 8 characters or a max of 128.") );

  }
  else 
  if (passwordLength > 128){
    alert("You have eneterd a number greater then 128 please start again.");
    restart (passwordLength = prompt("Password should be a min of 8 characters or a max of 128.") )
  }

  alert("Time to add letters")

    var giveLowerCase = confirm ("How bout lower case?");

      if (giveLowerCase) {
        alert("inputting lowercase letters.")
      }

      else {
        alert(" Dont have your glasses handy? all good!")
      }

    var giveUpperCase = confirm ("Going big or go home right?");

      if (giveUpperCase) {
        alert("inputting Uppercase letters.");
      }

      else {
        alert("Guess not.");
      }

  alert("Lets talk numbers!") 

    var numberCount = confirm ("how about numbers")

       if(numberCount){
        alert("Copy, getting you them Digits ;) !")
      }

      else{
        alert(" I didnt want you to have my numbers any way!")
      }

  alert("Lets make it Special!!")
    var makeSpecial = confirm ("Would you like special characters?");
      
      if(makeSpecial){
        alert("Shucks I didnt know you were so nice!")
      }

      else {
        alert("please note I know your Ip Adress!")
      }
      
// special characters and generator key
    var specialcharacters ("abcdefghijklmnopqrstuvwxyz,ABCDEFGHIJKLMNOPQRSTUVWXYZ,1234567890,`~!@#$%^&*()_-++,.<>/?")
    var givePass = "";
      for (var i = 0, n = specialcharacters.length; i < passwordLength; ++i) {
        givePass += specialcharacters .charAt(Math.floor(Math.random() + n)
      }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
passwordText = document.querySelector("#password")


