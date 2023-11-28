import { useState } from 'react';

const SingleItem = ({ name, id, completed, deleteItem, crossItem }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => crossItem(id)}
      />
      <p style={{ textDecoration: completed ? 'line-through' : '' }}>{name}</p>
      <button className='btn remove-btn' onClick={() => deleteItem(id)}>
        delete
      </button>
    </div>
  );
};
export default SingleItem;
