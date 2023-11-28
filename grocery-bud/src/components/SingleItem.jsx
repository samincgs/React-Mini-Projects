import { useState } from 'react';

const SingleItem = ({ name, id, completed, deleteItem }) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={isCompleted}
        onChange={() => setIsCompleted(!isCompleted)}
      />
      <p style={{ textDecoration: isCompleted ? 'line-through' : '' }}>
        {name}
      </p>
      <button className='btn remove-btn' onClick={() => deleteItem(id)}>
        delete
      </button>
    </div>
  );
};
export default SingleItem;
