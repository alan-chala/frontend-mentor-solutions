const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");
const errorMessageElement = document.querySelector(".error-message");

formElement.addEventListener("submit", (e) => {
  e.preventDefault()

  const isValidEmail = validarEmail(inputElement.value)

  if (!isValidEmail || inputElement.value === "") {
    inputElement.classList.add("input-error")
    errorMessageElement.style.display = "block"
    console.log("Email inválido")
  }
  else {
    inputElement.classList.remove("input-error")
    errorMessageElement.style.display = "none"
    console.log("Email válido")
  }

})

function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}   