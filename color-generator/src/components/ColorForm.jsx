import { useState } from 'react';

const ColorForm = () => {
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(color);
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <h4>color generator</h4>
      <div className='color-inputs'>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f15f09'
        />
        <button
          type='submit'
          className='btn'
          style={{ backgroundColor: color }}
        >
          submit
        </button>
      </div>
    </form>
  );
};
export default ColorForm;
