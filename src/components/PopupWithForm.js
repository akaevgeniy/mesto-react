function PopupWithForm(props) {
  return (
    <div className={`popup popup_form_${props.name} ${props.isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" aria-label="Закрыть окно"></button>
        <form className={`popup__form popup__form_${props.name}`} name={`popup__form_${props.name}`}>
          <h2 className={`popup__title popup__title_${props.name}`}>{props.title}</h2>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
