import { useState } from 'react';
import { data } from './data.js';

import Questions from './components/Questions.jsx';

function App() {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleActiveId = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleActiveId={toggleActiveId}
      />
    </main>
  );
}

export default App;
