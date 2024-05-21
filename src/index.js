import "../src/pages/index.css";
import { initialCards } from "./components/cards.js";
import { createCard, deleteCard, likeCard } from "./components/card.js";
import { openPopup, closePopup } from "./components/modal.js";

const placesList = document.querySelector(".places__list");

const profileEditPopupButton = document.querySelector(".profile__edit-button");
const placeAddPopupButton = document.querySelector(".profile__add-button");

const profileEditPopup = document.querySelector(".popup_type_edit");
const addPlacePopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");

const allPopups = [profileEditPopup, addPlacePopup, imagePopup];

const profileEditFormElement = profileEditPopup.querySelector(".popup__form");
const addCardFormElement = addPlacePopup.querySelector(".popup__form");

const nameInputPopupEdit = profileEditFormElement.querySelector(
  ".popup__input_type_name"
);
const jobInputPopupEdit = profileEditFormElement.querySelector(
  ".popup__input_type_description"
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const nameInputPopupAdd = addCardFormElement.querySelector(
  ".popup__input_type_card-name"
);
const urlInputPopupAdd = addCardFormElement.querySelector(
  ".popup__input_type_url"
);

const bigPicturePopup = imagePopup.querySelector(".popup__image");
const namePlace = imagePopup.querySelector(".popup__caption");

function renderCards() {
  for (let i = 0; i < initialCards.length; i++) {
    const cardElement = createCard(
      initialCards[i],
      deleteCard,
      likeCard,
      handleImagePopup
    );
    placesList.append(cardElement);
  }
}

function handleImagePopup(cardImage) {
  if (bigPicturePopup) {
    bigPicturePopup.src = cardImage.src;
    bigPicturePopup.alt = cardImage.alt;
    namePlace.textContent = bigPicturePopup.alt;
  }

  openPopup(imagePopup);
}

function addPopupsEventListeners() {
  profileEditPopupButton.addEventListener("click", function () {
    openPopup(profileEditPopup);

    nameInputPopupEdit.value = profileTitle.textContent;
    jobInputPopupEdit.value = profileDescription.textContent;
  });

  placeAddPopupButton.addEventListener("click", function () {
    openPopup(addPlacePopup);
  });

  allPopups.forEach(function (popup) {
    const closeButton = popup.querySelector(".popup__close");

    if (closeButton) {
      closeButton.addEventListener("click", function () {
        closePopup(popup);
      });
    }
  });
}

function handleProfileEditFormSubmit(event) {
  event.preventDefault();

  profileTitle.textContent = nameInputPopupEdit.value;
  profileDescription.textContent = jobInputPopupEdit.value;

  closePopup(profileEditPopup);
}

function handleAddCardFormSubmit(event) {
  event.preventDefault();

  const newCardData = {
    name: nameInputPopupAdd.value,
    link: urlInputPopupAdd.value,
  };

  const cardElement = createCard(
    newCardData,
    deleteCard,
    likeCard,
    handleImagePopup
  );

  placesList.prepend(cardElement);

  closePopup(addPlacePopup);

  addCardFormElement.reset();
}

allPopups.forEach((modal) => {
  modal.classList.add("popup_is-animated");
});

profileEditFormElement.addEventListener("submit", handleProfileEditFormSubmit);

addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

renderCards();

addPopupsEventListeners();
