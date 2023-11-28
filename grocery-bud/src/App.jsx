import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import GroceryForm from './components/GroceryForm.jsx';
import DisplayItem from './components/DisplayItem.jsx';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const finalItem = {
      name: item,
      completed: false,
      id: nanoid(),
    };

    setItems([...items, finalItem]);
  };

  const deleteItem = (id) => {
    const finalItem = items.filter((item) => item.id !== id);
    setItems(finalItem);
  };

  return (
    <main>
      <div className='container-center'>
        <ToastContainer position='top-center' pauseOnHover={false} />
        <GroceryForm addItem={addItem} />
        <DisplayItem items={items} deleteItem={deleteItem} />
      </div>
    </main>
  );
}

export default App;
