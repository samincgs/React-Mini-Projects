import { useState } from 'react';
import { toast } from 'react-toastify';

const GroceryForm = ({ addItem }) => {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      addItem(item);
      setItem('');
      toast.success('Item has been added');
    } else {
      toast.error('Please provide an item to add');
    }
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
