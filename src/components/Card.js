function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  if (!props.card.hasOwnProperty('link')) {
    return '';
  }
  return (
    <article key="{props.key}" className="element">
      <button className="element__delete" type="button"></button>
      <img src={props.card.link} alt={props.card.name} className="element__photo" onClick={handleClick} />
      <div className="element__text">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button"></button>
          <p className="element__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
