import { useState } from 'react';
import { shortList, list } from './data.js';
import Carousel from './Carousel.jsx';

function App() {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  return (
    <main>
      <Carousel
        people={people}
        currentPerson={currentPerson}
        setCurrentPerson={setCurrentPerson}
      />
    </main>
  );
}

export default App;
