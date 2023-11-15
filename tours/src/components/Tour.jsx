import { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [showText, setShowText] = useState(false);

  return (
    <div className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>$ {price}</span>
      <div className='tour-info'>
        <h3>{name}</h3>
        <p>
          {showText ? info : `${info.substring(0, 200)}...`}
          <button
            type='button'
            className='toggle-btn'
            onClick={() => setShowText(!showText)}
          >
            {showText ? 'hide text' : 'read more'}
          </button>
        </p>
        <button type='button' className='btn' onClick={() => removeTour(id)}>
          not interested
        </button>
      </div>
    </div>
  );
};
export default Tour;
