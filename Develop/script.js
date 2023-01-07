// Assignment code here


// Get references to the #generate element
var password = document.getElementById("generate");

// Write password to the #password input
function writePassword(length = 12) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*0123456789";
  let passwordLength = length;
  let password = "";

  const array = new Uint32Array(length);
  window.crypto.getRandomValues(array);

  for (var i = 0; i < length; i++) {
    password += chars[array[i] % chars.length];
  }
  console.log(password);
  var passwordText = document.getElementById("password");
  passwordText.value = password;
  // writePassword.addEventListener("click", "password");
document.getElementById("password").innerHTML = password
  
}

// Add event listener to generate button

