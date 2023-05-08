import React, { useState } from 'react';
import css from './Searchbar.module.scss'; // імпортуємо стилі для компонента
import PropTypes from "prop-types"; // імпортуємо PropTypes для валідації пропсів

const Searchbar = ({ onSubmit }) => {
  const [imageName, setImageName] = useState(''); // створюємо state для зберігання назви зображення

  const handleNameChange = evt => {
    setImageName(evt.currentTarget.value.toLowerCase()); // обробляємо зміну значення поля вводу
  };

  const handleSubmit = evt => {
    evt.preventDefault(); // запобігаємо стандартній поведінці форми

    if (imageName.trim() === '') { // перевіряємо, чи ввів користувач назву зображення
      alert('no name image'); // якщо ні, виводимо повідомлення
      return; // і виходимо з функції
    }

    onSubmit(imageName); // передаємо назву зображення в батьківський компонент через props.onSubmit
    setImageName(''); // очищуємо поле вводу
  };

  return (
    <header className={css['form-wrap']}>
      <form className={css['search-form']} onSubmit={handleSubmit}>
        <input
          className={css['search-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={imageName}
          onChange={handleNameChange}
        />

        <button className={css['search-buttot']} type="submit">
          <span>Search</span>
        </button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired, // встановлюємо PropTypes для пропсу onSubmit
};

export default Searchbar; // експортуємо компонент Searchbar для використання в інших компонентах
