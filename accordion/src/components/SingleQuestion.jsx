import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ id, title, desc, activeId, toggleActiveId }) => {
  const currentId = id === activeId;

  return (
    <div className='question'>
      <div className='title-content'>
        <h5>{title}</h5>
        <button
          type='button'
          onClick={() => toggleActiveId(id)}
          className='btn'
        >
          {currentId ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {currentId && <p className='info'>{desc}</p>}
    </div>
  );
};
export default SingleQuestion;
