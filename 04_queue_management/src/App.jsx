import { useState } from "react"
import "./App.css"
import QueueForm from "./components/QueueForm"
import QueueDisplay from "./components/QueueDisplay"
export default function App() {
  const [queue, setQueue]=useState([])

  const addToQueue=(customer)=>{
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }])
    console.log(queue)
  }

  const updateStatus=(Id, newstatus)=>{

    setQueue(queue.map(customer=>customer.id===Id?{...customer, status: newstatus}:customer))
    console.log(queue)

  }

  const removeFromQueue=(Id)=>{
// ! keep only that customer whose id is not equal to the id we want to remove
      setQueue(queue.filter(customer=>customer.id!==Id))
      console.log(queue)
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
        <QueueDisplay queue={queue} onUpdateStatus={updateStatus} onRemove={removeFromQueue} />
      </main>
    </div>
  )
}