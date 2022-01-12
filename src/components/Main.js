//импортируем нужные компоненты
import React from 'react';
import edit_avatar from '../images/profile-avatar-button.svg';
import api from '../utils/Api';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
  //объявляем и назначаем изначальные значения стейтов, данные о пользователе и карточки
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);
  //функция, выводящая в консоль ошибку при запросе к АПИ
  const parseError = (err) => {
    console.log(err);
  };
  //создаем эффект, изменяющий при монтировании стейты на данные из сервера
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
  //jsx разметка компонента Main
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" onClick={props.onEditAvatar} />
            <img src={edit_avatar} alt="Поменять аватар" className="profile__avatar-icon" />
          </div>
          <div className="profile__text">
            <div className="profile__title">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__about">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>
      <section aria-label="label" className="elements">
        {cards.map((elem) => (
          <Card key={elem._id} card={elem} onCardClick={props.onCardClick} onCardLike={handleCardLike} />
        ))}
      </section>
    </main>
  );
}

export default Main;
