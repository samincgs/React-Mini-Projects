import { useState } from 'react';
import { data } from './data.js';

import Title from './components/Title.jsx';
import Menu from './components/Menu.jsx';

const currCategories = ['All', ...new Set(data.map((item) => item.category))];

function App() {
  const [menu, setMenuItems] = useState(data);
  const [categories, setCategories] = useState([currCategories]);

  return (
    <main>
      <Title text='our menu' />
      <Menu menu={menu} />
    </main>
  );
}

export default App;
