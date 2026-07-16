let totalCount=0;

function registration() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const studentID = document.getElementById("studentID").value;
  const email = document.getElementById("email").value;
  const credit = document.getElementById("credit").value;

  let hasfNameError = true;
  let haslnameError = true;
  let hasStudentIDError=true;
  let hasEmailError = true;
  let hascreditError = true;
  let hasDepartmentError = true;
  if (!fname) {
    document.getElementById("fnameError").innerHTML = "First Name can not be empty";
    document.getElementById("fnameError").style.color = "red";
    hasfNameError = true;
 
  } else {
    document.getElementById("fnameError").innerHTML = "";
    hasfNameError = false;
  }
  if (!lname) {
    document.getElementById("lnameError").innerHTML = "Last Name can not be empty";
    document.getElementById("lnameError").style.color = "red";
    haslNameError = true;
 
  } else {
    document.getElementById("lnameError").innerHTML = "";
    haslNameError = false;
  }
   if (!studentID) {
    document.getElementById("studentIDError").innerHTML =
      "Email is a required field";
    document.getElementById("studentIDError").style.color = "red";
    hasEmailError = true;
  } else if (!studentID.includes("-")) {
    document.getElementById("studentIDError").innerHTML =
      "Please provide a valid student ID";
    document.getElementById("studentIDError").style.color = "red";
    hasEmailError = true;
  } else {
    document.getElementById("studentIDError").innerHTML = "";
    hasstudentIDError = false;
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
   if (!credit) {
    document.getElementById("creditError").innerHTML =
      "Credit is a required field";
    document.getElementById("creditError").style.color = "red";
    hascreditError = true;
  } else if (!credit<=148) {
    document.getElementById("creditError").innerHTML =
      "Credit cannot be greater than 148";
    document.getElementById("creditError").style.color = "red";
    hascreditError = true;
  } else {
    document.getElementById("creditError").innerHTML = "";
    hascreditError = false;
  }
   if (!department) {
    document.getElementById("departmentError").innerHTML = "Please select your Department";
    document.getElementById("departmentError").style.color = "red";
    hasdepartmentError = true;
 
  } else {
    document.getElementById("passwordError").innerHTML = "";
    hasdepartmentError = false;
  }

  if (!hasfNameError && haslNameError && !hasEmailError && !hasdepartmentError && !hascreditError) {
    document.getElementById("totalRegistrations").innerHTML = ++totalCount;
  }
  return false;
}
// Get values
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var studentID = document.getElementById("studentID").value;
var email = document.getElementById("email").value;
var credit = document.getElementById("credit").value;
var department = document.getElementById("Department").value;

var table = document.getElementById("studentTable");


var row = table.insertRow(-1);


row.insertCell(0).innerHTML = firstName;
row.insertCell(1).innerHTML = lastName;
row.insertCell(2).innerHTML = studentID;
row.insertCell(3).innerHTML = email;
row.insertCell(4).innerHTML = credit;
row.insertCell(5).innerHTML = department;


document.getElementById("firstName").value = "";
document.getElementById("lastName").value = "";
document.getElementById("studentID").value = "";
document.getElementById("email").value = "";
document.getElementById("credit").value = "";
document.getElementById("Department").value = "";


return false;