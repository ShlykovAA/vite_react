import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Assortment } from './sections/assortment'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Assortment />
    </div>
  )
}

export default App