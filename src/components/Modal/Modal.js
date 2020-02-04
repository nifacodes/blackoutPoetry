import React from 'react';
import { Modal as ModalMUI } from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';
// Only had video as its content
const Modal = ({ handleClose, isOpen }) => {
  return (
    <ModalMUI open={isOpen} onClose={handleClose}>
      <div className={styles['video-container']} onClick={handleClose}>
        <iframe className={styles.video} title="instructions" src="https://www.youtube.com/embed/wKpVgoGr6kE" />
      </div>
    </ModalMUI>
  );
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Modal;
