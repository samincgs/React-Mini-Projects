import { useState } from 'react';
import ColorForm from './components/ColorForm.jsx';
import ColorList from './components/ColorList.jsx';
import Values from 'values.js';

function App() {
  const colorValue = new Values('#f15f09').all(10);
  const [colors, setColors] = useState(colorValue);

  return (
    <main>
      <ColorForm />
      <ColorList colors={colors} />
    </main>
  );
}

export default App;
