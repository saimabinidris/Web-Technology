function registration() {
  const fname = document.getElementById("firstName").value;
  const lname = document.getElementById("lastName").value;
  const studentID = document.getElementById("studentID").value;
  const email = document.getElementById("email").value;
  const credit = document.getElementById("credit").value;
  const department = document.getElementById("department").value;

  let hasfNameError = false;
  let haslNameError = false;
  let hasstudentIDError = false;
  let hasEmailError = false;
  let hascreditError = false;
  let hasdepartmentError = false;

  if (!fname) {
    document.getElementById("fnameError").innerHTML = "First Name cannot be empty";
    hasfNameError = true;
  } else {
    document.getElementById("fnameError").innerHTML = "";
  }

  if (!lname) {
    document.getElementById("lnameError").innerHTML = "Last Name cannot be empty";
    haslNameError = true;
  } else {
    document.getElementById("lnameError").innerHTML = "";
  }

  if (!studentID) {
    document.getElementById("studentIDError").innerHTML = "Student ID is a required field";
    hasstudentIDError = true;
  } else if (!studentID.includes("-")) {
    document.getElementById("studentIDError").innerHTML = "Please provide a valid student ID (must contain hyphens)";
    hasstudentIDError = true;
  } else {
    document.getElementById("studentIDError").innerHTML = "";
  }

  if (!email) {
    document.getElementById("emailError").innerHTML = "Email is a required field";
    hasEmailError = true;
  } else if (!email.includes("@")) {
    document.getElementById("emailError").innerHTML = "Please provide a valid email address";
    hasEmailError = true;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }

  if (!credit) {
    document.getElementById("creditError").innerHTML = "Credit is a required field";
    hascreditError = true;
  } else if (Number(credit) > 148 || Number(credit) < 0) {
    document.getElementById("creditError").innerHTML = "Credit must be between 0 and 148";
    hascreditError = true;
  } else {
    document.getElementById("creditError").innerHTML = "";
  }

  if (!department) {
    document.getElementById("departmentError").innerHTML = "Please select your Department";
    hasdepartmentError = true;
  } else {
    document.getElementById("departmentError").innerHTML = "";
  }

  if (!hasfNameError && !haslNameError && !hasstudentIDError && !hasEmailError && !hascreditError && !hasdepartmentError) {
    const table = document.getElementById("studentTable");
    const row = table.insertRow(-1);

    row.insertCell(0).innerText = fname;
    row.insertCell(1).innerText = lname;
    row.insertCell(2).innerText = studentID;
    row.insertCell(3).innerText = email;
    row.insertCell(4).innerText = credit;
    row.insertCell(5).innerText = department;

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("studentID").value = "";
    document.getElementById("email").value = "";
    document.getElementById("credit").value = "";
    document.getElementById("department").value = "";
  }

  return false;
}
