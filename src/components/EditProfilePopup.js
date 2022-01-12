import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);
  return (
    <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
      <input
        id="profile-name"
        className="popup__input popup__input_is_name"
        name="popup__input_is_name"
        type="text"
        placeholder="Имя"
        required
        defaultValue={currentUser.name}
        onChange={handleNameChange}
      />
      <span id="profile-name-error" className="popup__error"></span>
      <input
        id="profile-about"
        className="popup__input popup__input_is_about"
        name="popup__input_is_about"
        type="text"
        placeholder="О себе"
        required
        defaultValue={currentUser.about}
        onChangeCapture={handleDescriptionChange}
      />
      <span id="profile-about-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
