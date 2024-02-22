
import './App.css';
import SignUpForm from './components/SignUpForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify';

function App() {
  return (
    <div className="App">
     <ToastContainer/>
      <SignUpForm />
    </div>
  );
}

export default App;
