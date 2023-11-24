import { useState } from 'react';
import data from './data.js';

function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <main>
      <div className='lorem-center'>
        <h4>tired of using the same boring lorem ipsum?</h4>
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
          <button type='submit'>generate</button>
        </form>
      </div>
    </main>
  );
}

export default App;
