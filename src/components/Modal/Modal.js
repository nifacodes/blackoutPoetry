import React from 'react';
import { Modal as ModalMUI } from '@material-ui/core';
import PropTypes from 'prop-types';

import './Modal.css';

const Modal = ({ handleClose, isOpen }) => (
  <ModalMUI open={isOpen} onClose={handleClose}>
    <div className="video-container" onClick={handleClose}>
      <iframe className="video" title="instructions" src="https://www.youtube.com/embed/wKpVgoGr6kE" />
    </div>
  </ModalMUI>
);

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Modal;
