import { useState } from 'react';
import Home from './Components/Home';
import "../src/App.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-500'>
      <Home/>
    </div>
  )
}

export default App
