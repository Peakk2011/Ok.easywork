import { useState } from 'react';
import EasyworkLogo from './assets/EasyworkLogo.svg';
import './css/App.css';
import Navbar from './comp/Navbar';
import './css/DefineFont.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Navbar />
    
  )
}

export default App
