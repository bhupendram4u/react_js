import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const add_counter = () => setCount(count + 1);
  const decry_counter=(varl)=>{
    console.log(varl)
    setCount((count)=>count-1)
    setCount((count)=>count-1)
    setCount((count)=>count-1)
  };

  return (
    < div className="card" >
      <button onClick={add_counter}>
        count is {count}
      </button>
      <button onClick={()=>decry_counter("twt")}>
       decrease count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div >

  )
}

export default App
