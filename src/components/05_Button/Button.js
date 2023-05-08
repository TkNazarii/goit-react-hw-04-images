import React, { useState } from 'react';
import css from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ changeValue }) => {
  const [page, setPage] = useState(1);

  const increment = evt => {
    evt.preventDefault();
    setPage(page + 1);
    changeValue(page + 1);
  };

  return (
    <div className={css['wrapper-load-more']}>
      <button
        className={css['wrapper-buton']}
        onClick={increment}
        type="button"
      >
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  changeValue: PropTypes.func.isRequired,
};

export default Button;
