import { useState } from 'react';
import { nanoid } from 'nanoid';

import data from './data.js';

function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const paragraphs = data.slice(0, count);
    setText(paragraphs);
  };

  return (
    <main>
      <div className='lorem-center'>
        <h4 className='form-heading'>tired of boring lorem ipsum?</h4>
        <form action='' className='form-lorem' onSubmit={handleSubmit}>
          <label htmlFor='count' className='form-label'>
            paragraphs:
          </label>
          <input
            type='number'
            className='form-input'
            name='count'
            id='count'
            min='1'
            step='1'
            max='8'
            value={count}
            onChange={handleChange}
          />
          <button type='submit' className='btn'>
            generate
          </button>
        </form>
        {text.map((item) => (
          <p key={nanoid()} className='text'>
            {item}
          </p>
        ))}
      </div>
    </main>
  );
}

export default App;
