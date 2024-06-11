import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'

function App() {
let myObj ={
  name:"react",
  language: "superb"
}

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username= "navneet" btnText="Click me"  />
    <Card username= "rhea" btnText="visit me" />
    </>
  )
}

export default App
