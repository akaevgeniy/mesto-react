import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup';
import CurrentUserContext from '../contexts/CurrentUserContext';
import api from '../utils/Api';

function App() {
  //объявляем стейты попапов и карточки
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  //функция, выводящая в консоль ошибку при запросе к АПИ
  const parseError = (err) => {
    console.log(err);
  };
  //создаем эффект, изменяющий при монтировании стейты на данные из сервера
  React.useEffect(() => {
    api
      .getUserProfile()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => parseError(err));
  }, []);
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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

        <PopupWithForm name="add" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
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
        </PopupWithForm>

        <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да" onClose={closeAllPopups} />

        <PopupWithForm name="avatar-update" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input
            id="url-avatar"
            className="popup__input popup__input_is_avatar-link"
            name="popup__input_is_avatar_link"
            type="url"
            placeholder="Ссылка на аватар"
            required
          />
          <span id="url-avatar-error" className="popup__error"></span>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
