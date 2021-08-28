// Assignment code here
var charset = 'abcdefghijklmnopqrstuvwxyz'; 
var capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var symbol = '!@#$%^&*()-';
//var passwordString = symbol;
var symbols = symbol.split('');
var charsets = charset.split('');
var capitals = capital.split('');
var numbers = number.split(''); 

function generatePassword () {
  var passwordLength = prompt ("How long would you like your password to be?") 
  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);
  if (passwordLength < 8) {
    alert('You need a longer password.');
    generatePassword();
  } else if (passwordLength > 128) {
    alert('You need a shorter password');
    generatePassword();
  } else {
    alert('your password works');
  } 
  var symbolsCheck = confirm('Do you want symbols in your password?')
  var charsetCheck = confirm('Do you want characters in your password?')
  var charsetcapCheck = confirm('Do you want capital letters in your password?') 
  var numberCheck = confirm('Do you want numbers in your password?')
  var finalPw = buildPassword(passwordLength, symbolsCheck, charsetCheck, charsetcapCheck, numberCheck);
  return finalPw;
  
} 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function buildPassword(passwordLength, symbolsCheck, charsetCheck, charsetcapCheck, numberCheck) {
  var numberTypes = 0
  var trueValues = []
  var fullPassword = ''
  
  if (symbolsCheck === true) {
    numberTypes++
    trueValues.push(symbols);
  } 
  if (charsetCheck === true) {
    numberTypes++
    trueValues.push(charsets);
  }
  if (charsetcapCheck === true) {
    numberTypes++
    trueValues.push(capitals);
  }
  if (numberCheck === true) {
    numberTypes++
    trueValues.push(numbers);
  } 
  
  for (var i = 0; i < passwordLength; i++) {
    var selector = Math.floor(Math.random() * numberTypes)
    var store = trueValues[selector]
    var cselect = store[Math.floor(Math.random() * store.length)]
    fullPassword = fullPassword.concat(cselect);
    
  }
  return fullPassword;
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


