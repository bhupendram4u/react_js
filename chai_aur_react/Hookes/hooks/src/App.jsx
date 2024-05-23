import { useState, useEffect } from 'react'
import './App.css'
import Test from './Test'
import Xcallback from './useCallback/Xcallback'

function App() {
  const [count, setCount] = useState(0)


  useEffect(() => {
    // console.log('UseEFFECTOF Parent')
  }, [])


  const handleForm = (e) => {
    console.log(e.target.name)
    setCount((count) => count + 1);
  }

  return (
    <>
      {/* <p className="read-the-docs">
        Count Value {count}
        <input type="button"  onClick={handleForm} value="Click" name="ButtonInput" />
      </p> */}

      {/* <Test /> */}
      Click on the Vite and React logos to learn more
      <hr />
      <Xcallback />
    </>
  )
}

export default App
