import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MadlibComponents from './MadlibComponents'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Madlibs!</h1>
      <MadlibComponents />
     
    </>
  )
}

export default App
