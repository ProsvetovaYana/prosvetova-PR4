const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupSaveButtonElement = popupElement.querySelector('.popup__save');
const profileEditButtonElement = document.querySelector('.profile__edit-button');


const openPopup = function() {
  popupElement.classList.add('popup_open');
};

const closePopup = function() {
  popupElement.classList.remove('popup_open');
};

profileEditButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupSaveButtonElement.addEventListener('click', closePopup);

let formElement = popupElement.querySelector('.popup__content');
let nameInput = popupElement.querySelector('.popup__name-info');
let jobInput = popupElement.querySelector('.popup__about-info');
let profileName = document.querySelector('.profile__info-name');
let profileJob = document.querySelector('.profile__info-about');

function editProfile() {
  openPopup(popupElement);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};
profileEditButtonElement.addEventListener('click', editProfile);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value; 
};
formElement.addEventListener('submit', formSubmitHandler);