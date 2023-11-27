import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Values from 'values.js';

import ColorForm from './components/ColorForm.jsx';
import ColorList from './components/ColorList.jsx';

function App() {
  const colorValue = new Values('#f15f09').all(10);
  const [colors, setColors] = useState(colorValue);

  const selectColor = (color) => {
    const newColor = new Values(color).all(10);
    setColors(newColor);
  };

  return (
    <main>
      <ToastContainer pauseOnHover={false} position='top-center' />
      <ColorForm selectColor={selectColor} />
      <ColorList colors={colors} />
    </main>
  );
}

export default App;
