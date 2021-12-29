function ImagePopup(props) {
  return (
    <div className="popup popup_form_image">
      <figure className="popup__picture">
        <button className="popup__close" type="button" aria-label="Закрыть окно"></button>
        <img src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg" alt="Рисунок" className="popup__photo" />
        <figcaption className="popup__caption"></figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
