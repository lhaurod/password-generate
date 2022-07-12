// Assignmet code here

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var random = Math.random()
  return Math.floor(min*(1-random)+random*max)
}



function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

  while (true){

    var userInput = window.prompt( "What is your desired length for the password?" )

    if (userInput === null) {
      return
    }

    var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
      window.alert("Not a number!")
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password should be at least 8 characters and no more than 128 characters.")
    } else {
      break
    }

  }
  


  var userWantsLowercase = window.confirm("Would you like to include at least one Lowercase in your password?")
  var userWantsUppercase = window.confirm("Would you like to include at least one Uppercase in your password?")
  var userWantsNumericvalues = window.confirm("Would you like to include at least one Numeric Value in your password?")
  var userWantsSpecialcharacters = window.confirm("Would you like to include at least one Special Character in your password?")

  var lowercaseList =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numericvaluesList =["0","1","2","3","4","5","6","7","8","9"];
  var specialcharactersList =["!","@","#","$","%","^","&","*"];
  var uppercaseList =[];

  var optionsCart =[]

  for (var i = 0; i < lowercaselist.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (userWantsNumericvalues === true) {
    optionsCart.push(numericvaluesList);
  }

  if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList);
  }

  if (userWantsSpecialcharacters === true) {
    optionsCart.push(specialcharactersList);
  }

  if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList);
  }

  if (optionsCart.length === 0) {
     optionsCart.push(lowercaseList);
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart);
    var randomChar = getRandomItem(randomList);
    generatedPassword += randomChar;
  }
  return generatedPassword 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
