
function generatePassword() {
  // Ask the user for password length and character types
  var passwordLength = prompt("How many characters do you want the password to be? (8-128)");
  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useNumbers = confirm("Include numbers?");
  var useSpecialCharacters = confirm("Include special characters?");

  // Make sure that at least one character type is selected
  if (!useLowercase && !useUppercase && !useNumbers && !useSpecialCharacters) {
    alert("You must select at least one character type!");
    return;
  }

  // Build the character set to use
  var characterSet = "";
  if (useLowercase) characterSet += "abcdefghijklmnopqrstuvwxyz";
  if (useUppercase) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (useNumbers) characterSet += "0123456789";
  if (useSpecialCharacters) characterSet += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }
  // Write the password to the text box
  document.getElementById("password").value = password;
  console.log(password);
}