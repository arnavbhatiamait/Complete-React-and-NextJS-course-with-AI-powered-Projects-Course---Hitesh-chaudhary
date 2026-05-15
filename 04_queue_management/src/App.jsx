import { useState } from "react"
import "./App.css"
import QueueForm from "./components/QueueForm"
export default function App() {
  const [queue, setQueue]=useState([])

  const addToQueue=(customer)=>{
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }])
  }

  const updateStatus=(Id, newstatus)=>{

    setQueue(queue.map(customer=>customer.id===Id?{...customer, status: newstatus}:customer))

  }

  const removeFromQueue=(Id)=>{
// ! keep only that customer whose id is not equal to the id we want to remove
      setQueue(queue.filter(customer=>customer.id!==Id))
  }

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