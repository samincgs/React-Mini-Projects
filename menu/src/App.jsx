import { useState } from 'react';

import { data } from './data.js';

function App() {
  const [menu, setMenuItems] = useState(data);

  return <main>hello react</main>;
}

export default App;
