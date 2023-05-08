import React, { useState } from "react";
import css from './App.module.scss';
import Searchbar from "./01_Searchbar";
import ImageGallery from "./02_ImageGallery";
import Button from "./05_Button";
import Modal from './06_Modal'

const App = () => {

  // useState для управління відображенням модального вікна
  const [showModal, setShowModal] = useState(false);
  // useState для зберігання назви запиту на зображення
  const [imageName, setImageName] = useState('');
  // useState для зберігання URL великого зображення
  const [largeImageURL, setLargeImageURL] = useState('');
  // useState для зберігання тегів великого зображення
  const [tags, setTags] = useState('');
  // useState для зберігання поточної сторінки
  const [page, setPage] = useState(1);
  // useState для управління відображенням кнопки "Завантажити ще"
  const [buttonVsible, setButtonVsible] = useState(false);

  // Функція для передачі назви запиту на зображення з компонента Searchbar в App
  const formImageName = dataForm => {
    setImageName(dataForm)
  }

  // Функція для передачі відображення кнопки "Завантажити ще" з ImageGallery в App
  const buttonVsibleProp = buleanButton => {
    setButtonVsible(buleanButton)
  }

  // Функція для зміни номеру сторінки при кліку на кнопку "Завантажити ще"
  const pageIncrement = value => {
    setPage(value)
  }

  // Функція для відкриття/закриття модального вікна і передачі URL та тегів великого зображення в App
  const toggleModal = () => {
    setShowModal((prevState) => !prevState)
  }

  // Функція для передачі URL та тегів великого зображення з ImageGallery в App
  const giveLargeImage = (url, alt) => {
    setLargeImageURL(url)
    setTags(alt)
  }

		return (
			<div className={css['wrapper']} >
				{
					showModal && <Modal onClose={toggleModal}>
						<img src={largeImageURL} alt={tags} />
					</Modal>
				}

				<Searchbar onSubmit={formImageName}/>
				<ImageGallery buttonVsible={buttonVsibleProp} imageName={imageName} toggle={toggleModal} imageModal={giveLargeImage} changePage={page}/>
				{buttonVsible && <Button changeValue={pageIncrement}/>}
			</div>
		  );
	
}

export default App