import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>👋 Hello World!</h1>
      <p className="subtitle">Frontend Project — React + Vite</p>
      <p className="author">by irsanmm</p>

      <div className="card">
        <p>Kamu sudah klik sebanyak</p>
        <span className="count">{count}</span>
        <p>kali</p>
        <button onClick={() => setCount(count + 1)}>
          Klik saya
        </button>
      </div>
    </div>
  )
}

export default App
