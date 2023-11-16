import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ id, title, desc, activeId, toggleActiveId }) => {
  const currentId = id === activeId;

  return (
    <div className='question'>
      <div className='title-content'>
        <h4>{title}</h4>
        <button
          type='button'
          onClick={() => toggleActiveId(id)}
          className='btn'
        >
          {currentId ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <p className='info'>{currentId && desc}</p>
    </div>
  );
};
export default SingleQuestion;
