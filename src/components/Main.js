import React from 'react';
import avatar from '../images/profile-avatar.png';
import edit_avatar from '../images/profile-avatar-button.svg';
function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img src={avatar} alt="Аватар" className="profile__avatar" onClick={props.onEditAvatar} />
            <img src={edit_avatar} alt="Поменять аватар" className="profile__avatar-icon" />
          </div>
          <div className="profile__text">
            <div className="profile__title">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__about">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>
      <section aria-label="label" className="elements"></section>
    </main>
  );
}

export default Main;
