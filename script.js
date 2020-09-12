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

  console.log(randomChr);

  for (var i=0; i<lengthText; i++) {
    randomNumber = Math.floor(Math.random() * randomChr.length);
    console.log(randomNumber);

    password = password + randomChr[randomNumber];
    console.log(password);
  }

  var randomLetter = Math.floor(Math.random() * password.length);
  var randomLowerCase = Math.floor(Math.random() * lowerCaseArr.length);
  var randomUpperCase = Math.floor(Math.random() * upperCaseArr.length);
  var randomNumeric = Math.floor(Math.random() * numericArr.length);
  var randomSpecialChrs = Math.floor(Math.random() * specialChrsArr.length);

  for (var i=0; i<lowerCaseArr.length; i++) {
    if (password.includes(lowerCaseArr[i])) {
      var lowerCaseFound = true;
      break;
    }
  }
  for (var i=0; i<upperCaseArr.length; i++) {
    if (password.includes(upperCaseArr[i])) {
      var upperCaseFound = true;
      break;
    }
  }
  for (var i=0; i<numericArr.length; i++) {
    if (password.includes(numericArr[i])) {
      var numericFound = true;
      break;
    }
  }
  for (var i=0; i<specialChrsArr.length; i++) {
    if (password.includes(specialChrsArr[i])) {
      var specialChrsFound = true;
      break;
    }
  }

  if (lowerCaseFound != true){
    password = password.split("");
    console.log(password);
    var splicePass = password.splice(randomLetter, 1,lowerCaseArr[randomLowerCase]);
    console.log(password);
    var newPassword = password.join("");
    console.log(newPassword);
  }
  if (upperCaseFound != true){
    password = password.split("");
    console.log(password);
    var splicePass = password.splice(randomLetter, 1,upperCaseArr[randomUpperCase]);
    console.log(password);
    var newPassword = password.join("");
    console.log(newPassword);
  }
  if (numericFound != true){
    password = password.split("");
    console.log(password);
    var splicePass = password.splice(randomLetter, 1,numericArr[randomNumeric]);
    console.log(password);
    var newPassword = password.join("");
    console.log(newPassword);
  }
  if (specialChrsFound != true){
    password = password.split("");
    console.log(password);
    var splicePass = password.splice(randomLetter, 1,specialChrsArr[randomSpecialChrs]);
    console.log(password);
    var newPassword = password.join("");
    console.log(newPassword);
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);