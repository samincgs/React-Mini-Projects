import { useState } from 'react';
import { data } from './data.js';

import Title from './components/Title.jsx';
import Menu from './components/Menu.jsx';
import Categories from './components/Categories.jsx';

const currCategories = ['All', ...new Set(data.map((item) => item.category))];

function App() {
  const [menu, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(currCategories);

  const findMenu = (category) => {
    if (category === 'All') {
      setMenuItems(data);
      return;
    }
    const categoryMenu = data.filter((menu) => menu.category === category);
    setMenuItems(categoryMenu);
  };

  return (
    <main>
      <Title text='our menu' />
      <Categories categories={categories} findMenu={findMenu} />
      <Menu menu={menu} />
    </main>
  );
}

export default App;
