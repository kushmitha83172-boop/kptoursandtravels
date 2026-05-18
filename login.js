function loginUser(){

  const username =
    document.getElementById("username")
      .value.trim();

  const gmail =
    document.getElementById("gmail")
      .value.trim();

  const phone =
    document.getElementById("phone")
      .value.trim();

  /* VALIDATION */

  if(
    !username ||
    !gmail ||
    !phone
  ){

    alert(
      "Please fill all fields ❌"
    );

    return;

  }

  /* EMAIL VALIDATION */

  const gmailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(
    !gmailPattern.test(gmail)
  ){

    alert(
      "Enter valid Gmail ID ❌"
    );

    return;

  }

  /* PHONE VALIDATION */

  if(
    !/^[0-9]{10}$/.test(phone)
  ){

    alert(
      "Enter valid 10 digit phone number ❌"
    );

    return;

  }

  /* SAVE LOGIN */

  localStorage.setItem(
    "userLoggedIn",
    "true"
  );

  localStorage.setItem(
    "username",
    username
  );

  localStorage.setItem(
    "gmail",
    gmail
  );

  localStorage.setItem(
    "phone",
    phone
  );

  alert(
    "Login Successful ✅"
  );

  /* REDIRECT */

  window.location.href =
    "./index.html";

}