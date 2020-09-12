// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var i = true;
  while (i) { // ask for password length
    var passLength = prompt("What is the length of the password?");
    var passInteger = parseInt(passLength, 10);
    if (Number.isInteger(passInteger)){ // check if user typed an integer
      if (passInteger < 8 || passInteger > 128){ // check if integer is below 8 or above 128, if yes try again.
        alert("Your password length needs to be between 8 to 128 characters.")
      } else { // if no keep going
        i = false;
      }
    } else if (passLength){ // check if user typed anything other than an integer
      alert("Please type in a number.")
    } 
  }

  var j = true;
  while (j) { // ask for character types to be included in password
    var lowerCase = confirm("Should it have lower case characters?");
    var upperCase = confirm("Should it have upper case characters?");
    var numeric = confirm("Should it have numeric characters?");
    var specialChrs = confirm("Should it have special characters?");
    if (lowerCase === false && upperCase === false && numeric === false && specialChrs === false){ // if none has been picked, try again
      alert("Your password needs at least one character type.")
    } else { // otherwise keep going
      j = false;
    }
  }

  var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericArr = "0123456789";
  var specialChrArr = "~!@#$%^&*()_+-=,./<>?;:";
  var randomChr = "";
  var password = [];
  var filterAmount = 0;

  if (lowerCase){ // if lowercase was seleceted push a random lowercase to password
    var randomLowerCase = Math.floor(Math.random() * lowerCaseArr.length);
    password.push(lowerCaseArr[randomLowerCase]);
    console.log(password);
    randomChr = randomChr + lowerCaseArr;
    filterAmount++
  }
  if (upperCase){ // if uppercase was seleceted push a random uppercase to password
    var randomUpperCase = Math.floor(Math.random() * upperCaseArr.length);
    password.push(upperCaseArr[randomUpperCase]);
    console.log(password);
    randomChr = randomChr + upperCaseArr;
    filterAmount++
  }
  if (numeric){ // if numeric was seleceted push a random lowercase to password
    var randomNumeric = Math.floor(Math.random() * numericArr.length);
    password.push(numericArr[randomNumeric]);
    console.log(password);
    randomChr = randomChr + numericArr;
    filterAmount++
  }
  if (specialChrs){ // if special character was seleceted push a random sepcial character to password
    var randomSpecialChrs = Math.floor(Math.random() * specialChrArr.length);
    password.push(specialChrArr[randomSpecialChrs]);
    console.log(password);
    randomChr = randomChr + specialChrArr;
    filterAmount++
  }
  console.log(randomChr);

  var newRandomChr = randomChr.split(""); // turn selected chr string into an array

  for (var x = newRandomChr.length -1; x > 0; x--) { // shuffle selected chr array
    var y = Math.floor(Math.random() * x)            // this might be unncessary but to really make sure it's random :)
    var z = newRandomChr[x]
    newRandomChr[x] = newRandomChr[y]
    newRandomChr[y] = z
  }
  console.log(newRandomChr);

  for (var i=0; i<(passLength - filterAmount); i++) { // push the rest of the password array randomly
    var randomNumber = Math.floor(Math.random() * newRandomChr.length);
    password.push(newRandomChr[randomNumber]);
  }
  console.log(password);

  for (var a = password.length -1; a > 0; a--) { // shuffle password array
    var b = Math.floor(Math.random() * a)
    var c = password[a]
    password[a] = password[b]
    password[b] = c
  }
  console.log(password);

  var newPassword = password.join(""); // turn password array into a string

  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword; // display generated password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);