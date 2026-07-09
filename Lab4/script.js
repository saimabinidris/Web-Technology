let totalCount = 0;

function registration() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let hasNameError = true;
  let hasEmailError = true;
  let hasPasswordError=true;
  if (!name) {
    document.getElementById("nameError").innerHTML = "Name can not be empty";
    document.getElementById("nameError").style.color = "red";
    hasNameError = true;
  } else if (name.length < 3) {
    document.getElementById("nameError").innerHTML =
      "Name must be at least 3 char";
    document.getElementById("nameError").style.color = "red";
    hasNameError = true;
  } else {
    document.getElementById("nameError").innerHTML = "";
    hasNameError = false;
  }

  if (!email) {
    document.getElementById("emailError").innerHTML =
      "Email is a required field";
    document.getElementById("emailError").style.color = "red";
    hasEmailError = true;
  } else if (!email.includes("@")) {
    document.getElementById("emailError").innerHTML =
      "Please provide a valid email address";
    document.getElementById("emailError").style.color = "red";
    hasEmailError = true;
  } else {
    document.getElementById("emailError").innerHTML = "";
    hasEmailError = false;
  }
   if (!password) {
    document.getElementById("passwordError").innerHTML = "Password can not be empty";
    document.getElementById("passwordError").style.color = "red";
    hasPasswordError = true;
  } else if (!password=="ghf898") {
    document.getElementById("passwordError").innerHTML =
      "Password incorrect";
    document.getElementById("passwordError").style.color = "red";
    hasPasswordError = true;
  } else {
    document.getElementById("passwordError").innerHTML = "";
    hasPasswordError = false;
  }

  if (!hasNameError && !hasEmailError && !hasPasswordError) {
    document.getElementById("totalRegistrations").innerHTML = ++totalCount;
  }
  return false;
}