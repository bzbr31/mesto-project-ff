const cardTemplate = document.querySelector("#card-template").content;

function createCard(cardData, cardDelete, cardLike, handleImagePopup) {
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

  deleteButton.addEventListener("click", cardDelete);

  cardLikeButton.addEventListener("click", function (event) {
    const contains = event.target.classList.contains("card__like-button");

    if (contains) {
      cardLike(event.target);
    }
  });

  return cardElement;
}

function cardDelete(event) {
  const cardItem = event.target.closest(".card");
  cardItem.remove();
}

function cardLike(changeLike) {
  changeLike.classList.toggle("card__like-button_is-active");
}

export { createCard, cardDelete, cardLike };
