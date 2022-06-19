function checkForm() {
  if (!isValidName(document.getElementById("firstname_input").value)) {
    document.getElementById("firstname_label").innerHTML =
      "First Name:<br><span style='color:red'>Invalid First Name</span>";
    return false;
  } else {
    document.getElementById("firstname_label").innerHTML = "First Name:";
  }
  if (!isValidName(document.getElementById("lastname_input").value)) {
    document.getElementById("lastname_label").innerHTML =
      "Last Name:<br><span style='color:red'>Invalid Last Name</span>";
    return false;
  } else {
    document.getElementById("lastname_label").innerHTML = "Last Name:";
  }
  if (!isValidDate(document.getElementById("birthdate_input").value)) {
    document.getElementById("birthday_label").innerHTML =
      "Date Of Birth:<br><span style='color:red'>Invalid Date</span>";
    return false;
  } else {
    document.getElementById("birthday_label").innerHTML = "Date Of Birth:";
  }
  if (!isValidEmail(document.getElementById("email_input").value)) {
    document.getElementById("email_label").innerHTML =
      "Email:<br><span style='color:red'>Invalid Email</span>";
    return false;
  } else {
    document.getElementById("email_label").innerHTML = "Email:";
  }
  if (!isValidPhoneNumber(document.getElementById("phone_input").value)) {
    document.getElementById("phone_label").innerHTML =
      "Phone Number:<br><span style='color:red'>Invalid Phone Number</span>";
    return false;
  } else {
    document.getElementById("phone_label").innerHTML = "Phone Number:";
  }
  if (!isValidPassword(document.getElementById("password_input").value)) {
    document.getElementById("password_label").innerHTML =
      "Password:<br><span style='color:red'>Invalid Password</span>";
    return false;
  } else {
    document.getElementById("password_label").innerHTML = "Password:";
  }
  if (
    !isPasswordsMatch(
      document.getElementById("password_input").value,
      document.getElementById("confirmpass_input").value
    )
  ) {
    document.getElementById("confirmpass_label").innerHTML =
      "Confirm Password:<br><span style='color:red'>Password Do Not Match</span>";
    return false;
  } else {
    document.getElementById("confirmpass_label").innerHTML =
      "Confirm Password:";
  }
  return true;
}
function isValidName(strName) {
  let nameRegex = /([^a-z])/gi;
  if (nameRegex.test(strName) || strName.length > 10) {
    return false;
  }
  return true;
}
function isValidDate(strDate) {
  let userDate = getYearMonthDayFromString(strDate);
  console.log(userDate);
  let dateNow = new Date();
  let ageByYear = dateNow.getFullYear() - userDate[0];
  if (ageByYear < 18) {
    return false;
  } else if (ageByYear == 18) {
    let monthDiffrence = dateNow.getMonth() - userDate[1] + 1;
    if (monthDiffrence < 0) {
      return false;
    } else if (monthDiffrence == 0) {
      let dayDiffrence = dateNow.getDate() - userDate[2];
      if (dayDiffrence < 0) {
        return false;
      }
    }
  }
  return true;
}
function getYearMonthDayFromString(strDate) {
  let userDate = [];
  let helper = "";
  for (let i = 0; i < strDate.length; i++) {
    if (strDate[i] == "-") {
      userDate.push(+helper);
      helper = "";
    } else {
      helper += strDate[i];
    }
    if (i == strDate.length - 1) {
      userDate.push(+helper);
    }
  }
  return userDate;
}
function isValidEmail(strEmail) {
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailRegex.test(strEmail)) {
    return true;
  }
  return false;
}
function isValidPhoneNumber(strphone) {
  if (strphone.length != 10) {
    return false;
  }
  let phoneRegex = /^(050)[0-9]./g;
  if (phoneRegex.test(strphone)) {
    return true;
  }
  return false;
}
function isValidPassword(strPassword) {
  let passwordRegex = /^[A-Z][a-z](?=.*[0-9])[A-Za-z0-9]{6,10}$/;
  if (passwordRegex.test(strPassword)) {
    return true;
  }
  return false;
}
function isPasswordsMatch(password, validation) {
  if (password === validation) {
    return true;
  }
  return false;
}
