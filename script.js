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
  var specialChrArr = "~!@#$%^&*()_+-=,./<>?;:";
  var randomChr = "";
  var randomNumber = "";
  var password = "";

  if (lowerCase){
    randomChr = randomChr + lowerCaseArr;
    var noLowerCase = true ;
  }
  if (upperCase){
    randomChr = randomChr + upperCaseArr;
    var noUpperCase = true ;
  }
  if (numeric){
    randomChr = randomChr + numericArr;
    var noNumeric = true ;
  }
  if (specialChrs){
    randomChr = randomChr + specialChrArr;
    var noSpecialChr = true ;
  }

  console.log(randomChr);

  for (var i=0; i<lengthText; i++) {
    randomNumber = Math.floor(Math.random() * randomChr.length);
    console.log(randomNumber);

    password = password + randomChr[randomNumber];
    console.log(password);
  }

  password = password.split("");
  console.log(password);

  for (var i=0; i<password.length; i++) {
    for (var j=0; j<lowerCaseArr.length; j++){
      if (password.includes(lowerCaseArr[j])) {
        noLowerCase = false ;
        break;
      }
    }
    for (var j=0; j<upperCaseArr.length; j++){
      if (password.includes(upperCaseArr[j])) {
        noUpperCase = false ;
        break;
      }
    }
    for (var j=0; j<numericArr.length; j++){
      if (password.includes(numericArr[j])) {
        noNumeric = false ;
        break;
      }
    }
    for (var j=0; j<specialChrArr.length; j++){
      if (password.includes(specialChrArr[j])) {
        noSpecialChr = false ;
        break;
      }
    }
  }

  if (noLowerCase){
    var randomLetter = Math.floor(Math.random() * password.length);
    var randomLowerCase = Math.floor(Math.random() * lowerCaseArr.length);
    var splicePass = password.splice(randomLetter, 1,lowerCaseArr[randomLowerCase]);
    console.log(password);
  }

  if (noUpperCase){
    var randomLetter = Math.floor(Math.random() * password.length);
    var randomUpperCase = Math.floor(Math.random() * upperCaseArr.length);
    var splicePass = password.splice(randomLetter, 1,upperCaseArr[randomUpperCase]);
    console.log(password);
  }

  if (noNumeric){
    var randomLetter = Math.floor(Math.random() * password.length);
    var randomNumeric = Math.floor(Math.random() * numericArr.length);
    var splicePass = password.splice(randomLetter, 1,numericArr[randomNumeric]);
    console.log(password);
  }

  if (noSpecialChr){
    var randomLetter = Math.floor(Math.random() * password.length);
    var randomSpecialChrs = Math.floor(Math.random() * specialChrArr.length);
    var splicePass = password.splice(randomLetter, 1,specialChrArr[randomSpecialChrs]);
    console.log(password);
  }

  var newPassword = password.join("");
  console.log(newPassword);

  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);