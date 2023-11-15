import { useState } from 'react';
import {
  FaChevronCircleRight,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from 'react-icons/fa';

import { reviews } from './data.js';

function App() {
  const [index, setIndex] = useState(0);

  const { id, name, image, title, desc } = reviews[index];

  console.log(name);

  return (
    <main>
      <div className='container'>
        <div className='img-container'>
          <img src={image} alt={name} className='img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <div className='text-container'>
          <h3 className='name'>{name}</h3>
          <p className='title'>{title}</p>
          <p className='desc'>{desc}</p>
        </div>
        <div className='button-container'>
          <button type='button' className='prev-button'>
            <FaChevronLeft />
          </button>
          <button type='button' className='next-button'>
            <FaChevronRight />
          </button>
        </div>
        <button type='button' className='btn'>
          suprise me
        </button>
      </div>
    </main>
  );
}

export default App;
