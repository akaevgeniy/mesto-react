import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  //создаем рефы для обращения к инпутам в ДОМ
  const placeInputRef = React.useRef();
  const placeUrlInputRef = React.useRef();
  //Функция сабмита формы для добавления новой карточки, вызываем функцию из пропса
  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({ name: placeInputRef.current.value, link: placeUrlInputRef.current.value });
  }
  return (
    <PopupWithForm name="add" title="Новое место" buttonText="Создать" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input
        ref={placeInputRef}
        id="name-card"
        className="popup__input popup__input_is_add-name"
        name="popup__input_is_add_name"
        type="text"
        placeholder="Название"
        required
      />
      <span id="name-card-error" className="popup__error"></span>
      <input
        ref={placeUrlInputRef}
        id="url-card"
        className="popup__input popup__input_is_add-link"
        name="popup__input_is_add_link"
        type="url"
        placeholder="Ссылка на картинку"
        required
      />
      <span id="url-card-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
