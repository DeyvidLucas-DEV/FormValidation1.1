function validateField(fieldId) {
  const field = document.getElementById(fieldId);
  const errorMessage = document.getElementById(`${fieldId}Error`);

  if (fieldId === "email") {
    if (field.validity.valid) {
      errorMessage.style.display = "none";
    } else {
      errorMessage.style.display = "block";
    }
  } else if (fieldId === "password") {
    if (field.value.length >= 8) {
      errorMessage.style.display = "none";
    } else {
      errorMessage.style.display = "block";
    }
  }

  const submitButton = document.querySelector(".submit_button");
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");

  if (emailField.validity.valid && passwordField.value.length >= 8) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
