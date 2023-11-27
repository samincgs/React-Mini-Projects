import { useState } from 'react';

const GroceryForm = () => {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
  };

  return (
    <form className='form-grocery' onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className='form-input'>
        <input
          type='text'
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  );
};
export default GroceryForm;
