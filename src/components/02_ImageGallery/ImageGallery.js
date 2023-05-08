import PropTypes from 'prop-types';
import React from 'react';
import css from './ImageGallery.module.scss';

import ImageGalleryItem from 'components/03_ImageGalleryItem';

// Компонент, який відображає галерею зображень та передає відповідні пропси дочірньому компоненту ImageGalleryItem
const ImageGallery = ({
  buttonVsible,
  imageName,
  toggle,
  imageModal,
  changePage,
}) => {

  // Приймає пропси та відображає список зображень в компоненті ImageGalleryItem
  return (
    <ul className={css['gallery']}>
      <ImageGalleryItem
        buttonVsible={buttonVsible}
        pageValue={changePage}
        imageModalItem={imageModal}
        clickTogleModal={toggle}
        imageValue={imageName}
      />
    </ul>
  );
};

// Перевірка типів пропсів
ImageGallery.propTypes = {
//   buttonVsible: PropTypes.bool.isRequired,
  imageName: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  imageModal: PropTypes.func.isRequired,
  changePage: PropTypes.number.isRequired,
};

// Експортує компонент ImageGallery для використання в інших частинах додатка
export default ImageGallery;
