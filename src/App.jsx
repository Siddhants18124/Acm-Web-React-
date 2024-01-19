import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import CardsMT from './components/CardsMT/CardsMT'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/> 
    <Hero />
    <CardsMT/>
    </>
  )
}

export default App
