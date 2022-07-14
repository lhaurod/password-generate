// Assignmet code here
// function to generate a random numeric value
var randomInt = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
}

// randomly change the item in the list
function getRandomItem(list) {
  return list[randomInt(0,list.length-1)];
}

// function to generate password 
function generatePassword() {

  // ask the user if their desire legnth for the password 
  var userInput = window.prompt( "What is your desired length for the password?" )

  while (true){

    if (userInput === null) {
      return userInput
    }

    var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
      window.alert("Not a number!")
      return 
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password should be at least 8 characters and no more than 128 characters.")
      return
    } else {
      break
    }

  }
  

  // user password criteria
  var userWantsLowercase = window.confirm("Would you like to include at least one Lowercase in your password?")
  var userWantsUppercase = window.confirm("Would you like to include at least one Uppercase in your password?")
  var userWantsNumericvalues = window.confirm("Would you like to include at least one Numeric Value in your password?")
  var userWantsSpecialcharacters = window.confirm("Would you like to include at least one Special Character in your password?")
  
  
  // list of special characters to include in password 
  var lowercaseList =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numericvaluesList =[0,1,2,3,4,5,6,7,8,9];
  var specialcharactersList =["!","@","#","$","%","^","&","*"];
  var uppercaseList =[];

  var optionsCart =[]

  for (var i = 0; i < lowercaseList.length; i++) {
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

  // set password
  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart);
    console.log(randomList)
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
