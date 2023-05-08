import React, { useEffect } from 'react';
import css from './Modal.module.scss';
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";

const modalRoot = document.querySelector('#modalRoot');

const Modal = ({ onClose, largeImageURL, tags, children }) => {
useEffect(() => {
window.addEventListener('keydown', handleKeyDown);
return () => {
window.removeEventListener('keydown', handleKeyDown);
};
}, [handleKeyDown]);

const handleKeyDown = (e) => {
if (e.code === 'Escape') {
onClose();
}
};

const handleBackdropClick = (e) => {
if (e.currentTarget === e.target) {
onClose();
}
};

return createPortal(
<div className={css.Modal__backdrop} onClick={handleBackdropClick}>
<div className={css.Modal__content}>{children}</div>
</div>,
modalRoot
);
}

Modal.propTypes = {
onClose: PropTypes.func.isRequired,
largeImageURL: PropTypes.string.isRequired,
tags: PropTypes.string.isRequired,
children: PropTypes.node.isRequired,
};

export default Modal