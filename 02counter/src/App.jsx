import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  


  // let counter = 5
  const addValue = () =>{
    // console.log("clicked", counter);
    counter = counter+1
    if(counter>=20){
      counter = 20;
      console.log("Sorry! limit reached")
    }
    setCounter(counter)
  }
  const removeValue = () =>{
    // console.log("removed", counter);
    counter = counter-1
    if(counter <= 0){
      counter = 0
      console.log("Sorry! limit reached")
      
    }
    setCounter(counter)
  }

  

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue} >Add Value</button>
      <br />
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
