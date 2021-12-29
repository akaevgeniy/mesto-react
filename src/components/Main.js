import React from 'react';
import edit_avatar from '../images/profile-avatar-button.svg';
import Api from '../utils/Api';
function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  Promise.all([Api.getUserProfile(), Api.getInitialCards()])
    .then(([userData, cardsPlace]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      setCards(cardsPlace);

      //рендерим карточки в контейнер
      //cardList.renderItems(cards.reverse());
    })
    .catch((err) => console.log(err));
 
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img src={userAvatar} alt="Аватар" className="profile__avatar" onClick={props.onEditAvatar} />
            <img src={edit_avatar} alt="Поменять аватар" className="profile__avatar-icon" />
          </div>
          <div className="profile__text">
            <div className="profile__title">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>
      <section aria-label="label" className="elements">
        {/* {cards.forEach((element) => {
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
          </article>;
        })} */}
      </section>
    </main>
  );
}

export default Main;
