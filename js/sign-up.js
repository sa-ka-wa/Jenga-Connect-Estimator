document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("submit", (e) => {
    e.preventDefault();

    const signUp = document.getElementById("form");
    const fullName = document.getElementById("fullName-input");
    const email = document.getElementById("email-input");
    const contacts = document.getElementById("contacts-input");
    const password = document.getElementById("password-input");
    const repeatPassword = document.getElementById("repeat-password-input");

    console.log(fullName, email, contacts, password, repeatPassword);

    //   let fullNameError = document.getElementById("fullNameError");

    //   fullNameError.innerText = "";
    clearErrors();

    let errors = SignUpError(
      fullName,
      email,
      contacts,
      password,
      repeatPassword
    );

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
        console.log("full names Error!!!");
        error.push("full names required");
        showError(fullName, "full names required");
      }
      if (email.value.trim() === "") {
        console.log("email Error!!!");
        error.push("email required");
        showError(email, "email required");
      }
      if (contacts.value.trim() === "") {
        console.log("contacts Error!!!");
        error.push("contacts required");
        showError(contacts, "contacts required");
      }
      if (password.value.trim() === "") {
        console.log("password Error!!!");
        error.push("password required");
        showError(password, "password required");
      }
      if (repeatPassword.value.trim() !== password.value.trim()) {
        error.push("Passwords do not match");
        showError(repeatPassword, "Passwords do not match");
      }
      return error;
    }

    function showError(element, message) {
      const errorDiv = element.parentElement.querySelector(".error");
      errorDiv.textContent = message;
      element.classList.add("incorrect");
    }

    function clearErrors() {
      document
        .querySelectorAll(".error")
        .forEach((el) => (el.textContent = ""));
      document
        .querySelectorAll(".error")
        .forEach((el) => el.classList.remove("incorrect"));
    }

    const allinputs = [fullName, email, contacts, password, repeatPassword];
    allinputs.addEventListener(input, () => {
      if (input.parentElement.classList.contains("incorrect")) {
        input.parentElement.classList.remove("incorrect");
      }
    });
  });
});
