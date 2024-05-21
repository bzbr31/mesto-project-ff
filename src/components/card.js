const cardTemplate = document.querySelector("#card-template").content;

function createCard(cardData, deleteCard, likeCard, handleImagePopup) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");

  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  cardImage.addEventListener("click", function () {
    handleImagePopup(cardImage);
  });

  deleteButton.addEventListener("click", deleteCard);

  cardLikeButton.addEventListener("click", function (event) {
    likeCard(event.target);
  });

  return cardElement;
}

function deleteCard(event) {
  const cardItem = event.target.closest(".card");
  cardItem.remove();
}

function likeCard(likeIcon) {
  likeIcon.classList.toggle("card__like-button_is-active");
}

export { createCard, deleteCard, likeCard };
