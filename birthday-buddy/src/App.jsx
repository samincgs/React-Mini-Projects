import { useState } from 'react';
import { data } from './data.js';
import Person from './components/Person.jsx';

function App() {
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    setPeople([]);
  };

  return (
    <main className='container'>
      <div className='person-container'>
        <h2 className='person-title'> {people.length} birthdays today</h2>
        {people.map((person) => {
          return <Person key={person.id} {...person} />;
        })}
        <div className='button-container'>
          <button type='button' onClick={handleClick} className='btn'>
            Clear list
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
