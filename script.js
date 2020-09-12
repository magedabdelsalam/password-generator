// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var i = true;
  while (i) {
    var lengthText = prompt("What is the length of the password?");
    var stringIntoInteger = parseInt(lengthText, 10);
    if (Number.isInteger(stringIntoInteger)){
      if (stringIntoInteger < 8 || stringIntoInteger > 128){
        i = true;
        alert("Your password length needs to be between 8 to 128 characters.")
      } else {
        i = false;
      }
    } else if (lengthText){
      i = true;
      alert("Please type in a number.")
    } else {
      return;
    }
  }

  var j = true
  while (j) {
    var lowerCase = confirm("Should it have lower case characters?");
    var upperCase = confirm("Should it have upper case characters?");
    var numeric = confirm("Should it have numeric characters?");
    var specialChrs = confirm("Should it have special characters?");
    if (lowerCase === false && upperCase === false && numeric === false && specialChrs === false){
      alert("Your password needs at least one character type.")
      j = true;
    } else {
      j = false;
    }
  }

  var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericArr = "0123456789";
  var specialChrsArr = "~!@#$%^&*()_+-=,./<>?;:";
  var randomChr = "";
  var randomNumber = "";
  var password = "";

  if (lowerCase){
    randomChr = randomChr + lowerCaseArr;
  }
  if (upperCase){
    randomChr = randomChr + upperCaseArr;
  }
  if (numeric){
    randomChr = randomChr + numericArr;
  }
  if (specialChrs){
    randomChr = randomChr + specialChrsArr;
  }

  randomChr = randomChr.split('');
  console.log(randomChr);

  for (var i=0; i<lengthText; i++) {
    randomNumber = Math.floor(Math.random() * randomChr.length);
    console.log(randomNumber);
    password = password + randomChr[randomNumber];
    console.log(password);
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

