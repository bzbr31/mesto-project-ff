// Шаблон карточки
const cardTemplate = document.querySelector("#card-template").content;

// Контейнер карточек
const cardContainer = document.querySelector(".places__list");

// Создание карточки
function createCard(cardContent, deleteHandler) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  cardTitle.textContent = cardContent.name;
  cardImage.src = cardContent.link;
  cardImage.alt = `Изображение ${cardContent.name}`;

  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  cardDeleteBtn.addEventListener("click", deleteHandler);

  return cardElement;
}

// Удаление карточки
function deleteCard(e) {
  e.target.closest(".places__item").remove();
}

// Вывод карточек на страницу
function renderCards() {
  initialCards.forEach((cardContent) => {
    const card = createCard(cardContent, deleteCard);
    cardContainer.append(card);
  });
}

renderCards();
