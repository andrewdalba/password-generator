// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // GIVEN I need a new, secure password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//generatePassword function should be below

// ********************** function logic *********************
// THEN I am presented with a series of prompts for password criteria
// ???????  what series
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// ??????? I thought that is a given


// collected all the data here ************************
// ************ 1 PROMPT *****************
// ************ need validation***********
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// create an array with the acceptable lengths for the password
var lengthRequirments = [];
for (var i = 8; i <= 128; i++) {
  lengthRequirments.push(i.toString());
}

// we need a prompt here and ask for the length from the user
var passwordLength = prompt("Please enter the character length of the password (must be between 8 and 128 characters)");
// check IF the input number is < 8  and > 128
while (lengthRequirments.indexOf(passwordLength.toString()) === -1) {
  passwordLength = prompt("Error: Please enter a valid character length");
}

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// each prompt needs to be validated...
// In this case, we should probably use a function to turn the length into a number
passwordLength = parseInt(passwordLength);



// ****************** 4 confirms*******************
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// we need a confirm to ask the user if they want to use lowercase
// we need a confirm to ask the user if they want to use uppercase
// we need a confirm to ask the user if they want to use numeric
// we need a confirm to ask the user if they want to use special characters
var needLowercase = confirm("Does your password require a lowercase letter?");
var needUppercase = confirm("Does your password require an uppercase letter?");
var needNumeric = confirm("Does your password require a numeric character?");
var needSpecialCharacter = confirm("Does your password require a special character?");

if (needLowercase === false && needNumeric === false && needUppercase === false && needSpecialCharacter === false) {
  alert("ERROR: Your password must contain some type of character. Please Select from the following");
  var needLowercase = confirm("Does your password require a lowercase letter?");
  var needUppercase = confirm("Does your password require an uppercase letter?");
  var needNumeric = confirm("Does your password require a numeric character?");
  var needSpecialCharacter = confirm("Does your password require a special character?");
}

console.log("needLowercase: ", needLowercase, "needNumeric: ", needNumeric, "needSpecialCharacter: ", needSpecialCharacter, "needUppercase: ", needUppercase);

// end of "collected all the data here" ******************************
// using the number from above and the 4 booleans


// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// all the information is gathered (all prompts are finished getting input)
// all the HARD logic goes here ???????

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// either do an alert with the password... or just check to see if my variable has a password


// ********************** end function logic *********************





// Add event listener to generate button
// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);

var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var collectionValid = [];

//an array made strictly of characters included in the conditions that the user selects
var collectionSeed = [];
//a counter for how many conditions the user selects
var numberOfConditions = 0;

if (needLowercase) {
  //appends the collection valid array
  collectionValid = collectionValid.concat(lowercaseLetters);
  numberOfConditions = numberOfConditions + 1;
  //appends the collectionSeed array
  collectionSeed = collectionSeed.concat(lowercaseLetters);
}

if (needUppercase) {
  collectionValid = collectionValid.concat(uppercaseLetters);
  numberOfConditions = numberOfConditions + 1;
  collectionSeed = collectionSeed.concat(uppercaseLetters);
}

if (needSpecialCharacter) {
  collectionValid = collectionValid.concat(specialCharacters);
  numberOfConditions = numberOfConditions + 1;
  collectionSeed = collectionSeed.concat(specialCharacters);
}

if (needNumeric) {
  collectionValid = collectionValid.concat(numbers);
  numberOfConditions = numberOfConditions + 1;
  collectionSeed = collectionSeed.concat(numbers);
}



function generatePassword() {
  var finalPassword = "";

  //ensures that the conditions definitely make it into the final password
  for (var i = 1; i <= numberOfConditions; i++) {
    var randomElement = collectionSeed[Math.floor(Math.random() * collectionSeed.length)];
    finalPassword = finalPassword + randomElement;
  }

  for (var i = 1 + numberOfConditions; i <= passwordLength; i++) {
    //returns a random element from 'collectionValid'
    randomElement = collectionValid[Math.floor(Math.random() * collectionValid.length)];
    finalPassword = finalPassword + randomElement;
  }
  return finalPassword;

}