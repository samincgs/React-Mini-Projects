import { useState } from 'react';
import { shortList, list } from './data.js';
import Carousel from './Carousel.jsx';

function App() {
  const [people, setPeople] = useState(shortList);

  return (
    <main>
      <Carousel people={people} />
    </main>
  );
}

export default App;
