import { useState } from "react"
import "./App.css"
import QueueForm from "./components/QueueForm"
export default function App() {
  const [queue, setQueue]=useState([])

  const addToQueue=(customer)=>{
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }])
  }

  const updateStatus=(Id, status)=>{}

  const removeFromQueue=(Id)=>{}

  return(
    <div className="app">
      <header>
        <h1>Queue Management App</h1>
        <p>Mange your customers efficiently
        </p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <h1>Display content</h1>
      </main>
    </div>
  )
}