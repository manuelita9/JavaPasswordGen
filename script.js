// Code assignment 
let cb3 = document.getElementById('cb3');
let includeLowercase = cb3.checked;
let cb1 =document.getElementById('cb1')
let includeNumbers = cb1.checked;
let cb2 = document.getElementById('cb2')
let includeUppercase = cb2.checked;
let cb4 = document.getElementById('cb4')
let includeSpecial = cb4.checked;
let passwordLength = document.getElementById('numberSelect')
document.getElementById('numberSelect').addEventListener('change', function() {
  passwordLength = this.value;
});


// Write password to the #password input
function writePassword() {
  let password = generatePassword(passwordLength, cb3.checked, cb1.checked, cb4.checked, cb2.checked);
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(length, includeLowercase, includeNumbers, includeSymbols, includeUppercase) {
  let allchars = "";
   if (includeUppercase) allchars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   if (includeLowercase) allchars += "abcdefghijklmnopqrstuvwxyz";
   if (includeNumbers) allchars += "0123456789";
   if (includeSymbols) allchars += "@#$%^&()_+~|}{[]></-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += allchars.charAt(Math.floor(Math.random() * allchars.length));
  }
  return password;
}

//Add event listener to generate button

console.log ("write password")