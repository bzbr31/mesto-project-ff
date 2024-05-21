function openPopup(popupElement) {
  popupElement.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupEscape);

  popupElement.addEventListener("click", closePopupOverlay);
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_is-opened");

  document.removeEventListener("keydown", closePopupEscape);

  popupElement.removeEventListener("click", closePopupOverlay);
}

function closePopupEscape(event) {
  const popupOpen = document.querySelector(".popup_is-opened");

  if (event.key === "Escape") {
    closePopup(popupOpen);
  }
}

function closePopupOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.currentTarget);
  }
}

export { openPopup, closePopup };
