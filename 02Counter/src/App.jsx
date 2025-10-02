import { useState } from 'react'

import './App.css'

function App() {

  const [counter,setCounter]=useState(15)

const  addValue = ()=>{
    setCounter((prevcounter)=>prevcounter+1)
    setCounter((prevcounter)=>prevcounter+1)
    setCounter((prevcounter)=>prevcounter+1)

  }

  const removeValue=()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>hello i am Gufran: {counter}</h1>
     
      <button  onClick={addValue}>
       
        add values </button>{"  "}
      <button onClick={removeValue}>remove value</button>
      <p> <h2>footer:{counter}</h2></p>
    </>
  )
}

export default App
