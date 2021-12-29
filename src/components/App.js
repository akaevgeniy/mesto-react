import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };
  return (
    <>
      <div className="page">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
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
        />

        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          children={
            <>
              <input type="submit" className="popup__submit" value="Да" />
            </>
          }
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
        />
      </div>

      <template className="element-template">
        <article className="element">
          <button className="element__delete" type="button"></button>
          <img src="./images/element-bermamit.jpg" alt="Плато Бермамыт" className="element__photo" />
          <div className="element__text">
            <h2 className="element__title"></h2>
            <div className="element__like-container">
              <button className="element__like" type="button"></button>
              <p className="element__like-count">0</p>
            </div>
          </div>
        </article>
      </template>
    </>
  );
}

export default App;
