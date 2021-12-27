import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <body className="body">
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <div className="popup popup_form_edit">
          <div className="popup__container">
            <button className="popup__close" type="button" aria-label="Закрыть окно"></button>
            <form className="popup__form popup__form_edit-form" name="popup__edit-form" novalidate>
              <h2 className="popup__title">Редактировать профиль</h2>
              <input
                id="profile-name"
                className="popup__input popup__input_is_name"
                name="popup__input_is_name"
                type="text"
                placeholder="Имя"
                required
                minlength="2"
                maxlength="30"
              />
              <span id="profile-name-error" className="popup__error"></span>
              <input
                id="profile-about"
                className="popup__input popup__input_is_about"
                name="popup__input_is_about"
                type="text"
                placeholder="О себе"
                required
                minlength="2"
                maxlength="200"
              />
              <span id="profile-about-error" className="popup__error"></span>
              <input type="submit" className="popup__submit" value="Сохранить" />
            </form>
          </div>
        </div>
        <div className="popup popup_form_add-element">
          <div className="popup__container">
            <button className="popup__close" type="button" aria-label="Закрыть окно"></button>
            <form className="popup__form popup__form_add-form" name="popup__add-form" novalidate>
              <h2 className="popup__title">Новое место</h2>
              <input
                id="name-card"
                className="popup__input popup__input_is_add-name"
                name="popup__input_is_add_name"
                type="text"
                minlength="2"
                maxlength="30"
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
            </form>
          </div>
        </div>
        <div className="popup popup_form_image">
          <figure className="popup__picture">
            <button className="popup__close" type="button" aria-label="Закрыть окно"></button>
            <img src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg" alt="Рисунок" className="popup__photo" />
            <figcaption className="popup__caption"></figcaption>
          </figure>
        </div>
        <div className="popup popup_form_confirm">
          <div className="popup__container">
            <button className="popup__close" type="button" aria-label="Закрыть окно"></button>
            <form className="popup__form popup__form_confirm" name="popup__form_confirm" novalidate>
              <h2 className="popup__title popup__title_confirm">Вы уверены?</h2>
              <input type="submit" className="popup__submit" value="Да" />
            </form>
          </div>
        </div>
        <div className="popup popup_form_avatar-update">
          <div className="popup__container">
            <button className="popup__close" type="button" aria-label="Закрыть окно"></button>
            <form className="popup__form popup__form_avatar-update" name="popup__form_avatar" novalidate>
              <h2 className="popup__title">Обновить аватар</h2>
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
            </form>
          </div>
        </div>
      </div>
      <template className="element-template">
        <article className="element">
          <button className="element__delete" type="button"></button>
          <img src="./images/element-bermamit.jpg" alt="Плато Бермамыт" className="element__photo" />
          <div className="element__text">
            <h2 className="element__title"></h2>
            <dev className="element__like-container">
              <button className="element__like" type="button"></button>
              <p className="element__like-count">0</p>
            </dev>
          </div>
        </article>
      </template>
    </body>
  );
}

export default App;
