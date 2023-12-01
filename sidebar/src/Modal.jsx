import { FaTimes } from 'react-icons/fa';

import { useGlobalContext } from './context.jsx';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  // overlay dark part of the screen
  return (
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;
