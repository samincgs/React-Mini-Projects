import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import GroceryForm from './components/GroceryForm.jsx';
import DisplayItem from './components/DisplayItem.jsx';

const saveLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('list'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  const addItem = (item) => {
    const finalItem = {
      name: item,
      completed: false,
      id: nanoid(),
    };

    setItems([...items, finalItem]);
    saveLocalStorage([...items, finalItem]);
  };

  const deleteItem = (id) => {
    const finalItem = items.filter((item) => item.id !== id);
    setItems(finalItem);
    saveLocalStorage(finalItem);
    toast.success('Item has now been deleted');
  };

  return (
    <main>
      <div className='container-center'>
        <ToastContainer
          position='top-center'
          pauseOnHover={false}
          autoClose={2500}
        />
        <GroceryForm addItem={addItem} />
        <DisplayItem items={items} deleteItem={deleteItem} />
      </div>
    </main>
  );
}

export default App;
