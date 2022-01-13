import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
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
  //данные о карточках
  const [cards, setCards] = React.useState([]);
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
  //создаем эффект, изменяющий при монтировании стейт на данные из сервера
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((placeCards) => {
        setCards(placeCards);
      })
      .catch((err) => parseError(err));
  }, []);
  //Функция для постановки/снятия лайка
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLike(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => parseError(err));
  }
  //Функция для удаления карточки
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then((updateCards) => {
        setCards(cards.filter((elem) => elem._id !== card._id));
        console.log(updateCards);
      })
      .catch((err) => parseError(err));
  }
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
  //обработчик для обновления информации о пользователе
  const handleUpdateUser = ({ name, about }) => {
    api
      .updateUserProfile({ name, about })
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => parseError(err));
  };
  //обработчик для обновления аватара пользователя
  const handleUpdateAvatar = (url) => {
    api
      .updateAvatar(url)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => parseError(err));
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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

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

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
