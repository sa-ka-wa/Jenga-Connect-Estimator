document.addEventListener("DOMContentLoaded", function () {
  const signUp = document.getElementById("form");
  const fullName = document.getElementById("fullName-input");
  const email = document.getElementById("email-input");
  const contacts = document.getElementById("contacts-input");
  const password = document.getElementById("password-input");
  const repeatPassword = document.getElementById("repeat-password-input");

  console.log(fullName, email, contacts, password, repeatPassword);

  signUp.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  //   let fullNameError = document.getElementById("fullNameError");

  //   fullNameError.innerText = "";

  //   clearErrors();

  let errors = SignUpError(fullName, email, contacts, password, repeatPassword);

  if (errors.length > 0) {
    console.log("Validation Errors:", errors);
    document.getElementById("error").innerHTML = errors.join("<br>");
  } else {
    console.log("Signup successful!");
    signUp.reset();
  }

  function SignUpError(fullName, email, contacts, password, repeatPassword) {
    let error = [];
    if (fullName.value.trim() === "") {
      console.log("Error!!!");
      error.push("full names required");
      showError(fullName, "full names required");
    }
    if (email.value.trim() === "") {
      console.log("Error!!!");
      error.push("email required");
      showError(email, "email required");
    }
    if (contacts.value.trim() === "") {
      console.log("Error!!!");
      error.push("contacts required");
      showError(contacts, "contacts required");
    }
    if (password.value.trim() === "") {
      console.log("Error!!!");
      error.push("password required");
      showError(password, "password required");
    }
    return error;
  }
  function showError(element, message) {
    const errorDiv = element.parentElement.querySelector(".error");
    errorDiv.textContent = message;
    element.classList.add("incorrect");
  }
});
