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
while (lengthRequirments.indexOf(passwordLength) === -1) {
    passwordLength = prompt("Error: Please enter a valid character length");
  }

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// each prompt needs to be validated...
// In this case, we should probably use a function to turn the length into a number
passwordLength = passwordLength.parseInt();



// ****************** 4 confirms*******************
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// we need a confirm to ask the user if they want to use lowercase
// we need a confirm to ask the user if they want to use uppercase
// we need a confirm to ask the user if they want to use numeric
// we need a confirm to ask the user if they want to use special characters

// end of "collected all the data here" ******************************
// using the number from above and the 4 booleans
// 

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


// // ******************** stuff that I will use later *******************************
// //returns a random element from 'collectionValid'
// var randomElement = collectionValid[Math.floor(math.random() * collectionValid.length)];


// var finalPassword = "";
// for (var i = 0; i <= passwordLength; i++) {
//   finalPassword = finalPassword + randomElement;
// }


//Then return the string 'finalPassword' for the user to see
// ********************* End of Stuff that I will use later ********************