import avatar from '../images/profile-avatar.png';
import edit_avatar from '../images/profile-avatar-button.svg';
function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img src={avatar} alt="Аватар" className="profile__avatar" />
            <img src={edit_avatar} alt="Поменять аватар" className="profile__avatar-icon" />
          </div>
          <div className="profile__text">
            <div className="profile__title">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать"></button>
            </div>
            <p className="profile__about">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить"></button>
      </section>
      <section aria-label="label" class="elements"></section>
    </main>
  );
}
export default Main;
