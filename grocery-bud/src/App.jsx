import { ToastContainer } from 'react-toastify';
import GroceryForm from './components/GroceryForm.jsx';

function App() {
  return (
    <main>
      <div className='container-center'>
        <ToastContainer position='top-center' pauseOnHover={false} />
        <GroceryForm />
      </div>
    </main>
  );
}

export default App;
