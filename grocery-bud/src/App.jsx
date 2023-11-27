import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import GroceryForm from './components/GroceryForm.jsx';

function App() {
  const [items, setItems] = useState([]);
  const tv = [
    { name: 'tom', id: 1 },
    { name: 'jerry', id: 2 },
  ];

  const addItem = (item) => {
    const finalItem = {
      name: item,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, finalItem]);
  };

  return (
    <main>
      <div className='container-center'>
        <ToastContainer position='top-center' pauseOnHover={false} />
        <GroceryForm addItem={addItem} />
      </div>
    </main>
  );
}

export default App;
