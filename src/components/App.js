import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  //объявляем стейты попапов и карточки
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  //функции, изменяющие значения стейтов
  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };
  //функция для закрытия всех попапов
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  };
  //функция, присваивающая нужную карточку стейту
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  //отрисовка секций
  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        children={
          <>
            <input
              id="profile-name"
              className="popup__input popup__input_is_name"
              name="popup__input_is_name"
              type="text"
              placeholder="Имя"
              required
            />
            <span id="profile-name-error" className="popup__error"></span>
            <input
              id="profile-about"
              className="popup__input popup__input_is_about"
              name="popup__input_is_about"
              type="text"
              placeholder="О себе"
              required
            />
            <span id="profile-about-error" className="popup__error"></span>
            <input type="submit" className="popup__submit" value="Сохранить" />
          </>
        }
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="add"
        title="Новое место"
        children={
          <>
            <input
              id="name-card"
              className="popup__input popup__input_is_add-name"
              name="popup__input_is_add_name"
              type="text"
              placeholder="Название"
              required
            />
            <span id="name-card-error" className="popup__error"></span>
            <input
              id="url-card"
              className="popup__input popup__input_is_add-link"
              name="popup__input_is_add_link"
              type="url"
              placeholder="Ссылка на картинку"
              required
            />
            <span id="url-card-error" className="popup__error"></span>
            <input type="submit" className="popup__submit" value="Создать" />
          </>
        }
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        children={
          <>
            <input type="submit" className="popup__submit" value="Да" />
          </>
        }
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="avatar-update"
        title="Обновить аватар"
        children={
          <>
            <input
              id="url-avatar"
              className="popup__input popup__input_is_avatar-link"
              name="popup__input_is_avatar_link"
              type="url"
              placeholder="Ссылка на аватар"
              required
            />
            <span id="url-avatar-error" className="popup__error"></span>
            <input type="submit" className="popup__submit" value="Сохранить" />
          </>
        }
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
