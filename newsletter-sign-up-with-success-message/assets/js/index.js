const signUpFormElement = document.querySelector(".sign-up-form");
const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");
const errorMessageElement = document.querySelector(".error-message");
const successMessageElement = document.querySelector(".success-message");
const userEmailElement = document.querySelector(".user-email");
const dimissButtonElement = document.querySelector(".dimiss-button");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const isValidEmail = validarEmail(inputElement.value);

  if (!isValidEmail || inputElement.value === "") {
    inputElement.classList.add("input-error");
    errorMessageElement.style.display = "block";
  } else {
    inputElement.classList.remove("input-error");
    errorMessageElement.style.display = "none";
    signUpFormElement.classList.add("sign-up-hidden");
    successMessageElement.classList.add("active");
    userEmailElement.textContent = inputElement.value;
  }
});

dimissButtonElement.addEventListener("click", () => {
  successMessageElement.classList.remove("active");
  signUpFormElement.classList.remove("sign-up-hidden");
  inputElement.value = "";
});

function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}
