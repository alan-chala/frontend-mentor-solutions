const toggleBtn = document.querySelector(".show-popup");
const popupElement = document.querySelector(".popup");

toggleBtn.addEventListener("click", () => {
  popupElement.classList.toggle("active");
});
