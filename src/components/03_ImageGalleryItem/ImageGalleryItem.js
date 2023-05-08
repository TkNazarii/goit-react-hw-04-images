import React, { useState, useEffect } from 'react';
import css from './ImageGalleryItem.module.scss';
import Loader from 'components/04_Loader';
import fetchImage from 'servises/pixabay-api';
import PropTypes from "prop-types";

const ImageGalleryItem = ({ buttonVsible, pageValue, imageModalItem, clickTogleModal, imageValue }) => {
	
	const [status, setStatus] = useState('idle');
	const [imageNameFetch, setImageNameFetch] = useState([]);
	const [buttonHiden, setButtonHiden] = useState(false);
	const [error, setError] = useState(null);
	const [isInitialLoad, setIsInitialLoad] = useState(true); // додано новий стан
  
	// Запит на отримання зображень з сервісу Pixabay при завантаженні компоненту або при зміні параметрів пошуку.
	useEffect(() => {
		if (isInitialLoad) { // додана перевірка
		  setIsInitialLoad(false);
		  return;
		}
  
	  const fetchImages = async () => {
		setStatus('pending');
  
		try {
		  const resp = await fetchImage(imageValue, pageValue, 12);
		  if (resp.ok) {
			const data = await resp.json();
			setImageNameFetch(prevState => [...prevState, ...data.hits]);
			setStatus('resolved');
			if (data.total > 12) {
			  setButtonHiden(true)
			} else {
			  setButtonHiden(false)
			}
		  } else {
			throw new Error('Here is a mistake');
		  }
		} catch (error) {
		  setError(error);
		  setStatus('rejected');
		}
	  }
	  fetchImages();
	}, [imageValue, pageValue, isInitialLoad]) // додано нову залежність
  

  // Викликаємо функцію для зміни стану кнопки перегляду додаткових зображень.
  useEffect(() => {
    buttonVsible(buttonHiden)
  }, [buttonHiden, buttonVsible])

  // Обробник події натискання на зображення. Викликає функцію для відкриття модального вікна з зображенням.
  const clickItem = (url, alt) => {
    imageModalItem(url, alt);
    clickTogleModal();
  }

  // Відображення різних станів компоненту: завантаження, помилка, результат пошуку.
  if (status === 'idle') {
    return <div>What are you looking for</div>;
  }

  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'rejected') {
    return <h2>{error.message}</h2>;
  }

  if (status === 'resolved') {
    return (
      <>
        {imageNameFetch.map(el => (
          <li className={css['photo-card']} key={el.id} onClick={() => clickItem(el.largeImageURL, el.tags)}>
            <img className={css['gallary-image']} src={el.webformatURL} alt={el.tags} />
          </li>
        ))}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  buttonVsible: PropTypes.func.isRequired,
  pageValue: PropTypes.number.isRequired,
  imageModalItem: PropTypes.func.isRequired,
  clickTogleModal: PropTypes.func.isRequired,
  imageValue: PropTypes.string.isRequired,
}; 

export default ImageGalleryItem
