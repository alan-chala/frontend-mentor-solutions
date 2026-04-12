const toggleBtn = document.querySelector(".show-popup");
const popupElement = document.querySelector(".popup");
const popupWrapper = document.querySelector(".popup-wrapper");

if (toggleBtn && popupElement && popupWrapper) {
  const firstPopupLink = popupElement.querySelector("a");

  const openPopup = () => {
    popupElement.hidden = false;
    popupElement.classList.add("active");
    toggleBtn.classList.add("active");
    toggleBtn.setAttribute("aria-expanded", "true");
  };

  const closePopup = () => {
    popupElement.classList.remove("active");
    toggleBtn.classList.remove("active");
    popupElement.hidden = true;
    toggleBtn.setAttribute("aria-expanded", "false");
  };

  const isPopupOpen = () => toggleBtn.getAttribute("aria-expanded") === "true";

  toggleBtn.addEventListener("click", () => {
    if (isPopupOpen()) {
      closePopup();
      return;
    }

    openPopup();
    if (firstPopupLink) {
      firstPopupLink.focus();
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;

    if (!popupWrapper.contains(target) && isPopupOpen()) {
      closePopup();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isPopupOpen()) {
      closePopup();
      toggleBtn.focus();
    }
  });
}
