import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//understanding and using hooks
function App() {
  const [counter, setCounter]=useState(5)
  //let counter=5

  const addValue = () => {
    //console.log("clicked", counter)
    //counter=counter+1 
    if(counter<20)
    setCounter(counter+1)
    //bunch of repetitive lines output(interview ques)
    //setCounter(prevCounter => prevCounter+1)
    //setCounter(prevCounter => prevCounter+1)
    //setCounter(prevCounter => prevCounter+1)
    //setCounter(prevCounter => prevCounter+1)  - innate callback function, now this will add a num in each step
    else
    console.log('limit exceeded')
  }

  const removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
