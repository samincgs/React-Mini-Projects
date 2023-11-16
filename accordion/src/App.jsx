import { useState } from 'react';
import { data } from './data.js';

function App() {
  const [questions, setQuestions] = useState(data);

  console.log(questions);

  return (
    <>
      <p>Hello react</p>
    </>
  );
}

export default App;
