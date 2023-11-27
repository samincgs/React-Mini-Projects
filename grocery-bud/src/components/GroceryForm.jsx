import { useState } from 'react';

const GroceryForm = () => {
  const [item, setItem] = useState('');
  return (
    <form className='form-grocery'>
      <h4>grocery bud</h4>
      <div className='form-input'>
        <input
          type='text'
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
    </form>
  );
};
export default GroceryForm;
