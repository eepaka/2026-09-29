import { useState } from 'react'
import './App.css'

let myStyle = {
  backgroundColor: "",
  set col(col) {
    this.backgroundColor = col;
  }
}

function App() {

  const [count, Setcount] = useState(0)
  const [color, setColor] = useState('')


  return (
    <div>

      <button
        type="button"
        className='counter'
        onClick={() => { Setcount((count) => count - 1); setColor('red') }}
      >
        -1
      </button>

      <button
        className='tracker'
        style={{ backgroundColor: color }}

      >
        {count}
      </button>

      <button
        type="button"
        className='counter'
        onClick={() => { Setcount((count) => count + 1); setColor('green') }}
      >
        +1
      </button>
    </div>
  )
}

export default App

