import React, { useState } from 'react'
import { FaUserPlus } from 'react-icons/fa'
function QueueForm({onAdd}) {
    const [name, setName]= useState("")
    const [service, setService]= useState("")

    const handleSubmit=(e)=>{{
        e.preventDefault()
        // !validations'
        if(!name.trim()|| !service.trim()){
            //  ~ on add triggers the function addToQueue
            onAdd({name, service})
            setName("")
            setService("")
        }
    }
    }

  return (
    <>
        <form onSubmit={handleSubmit} className="queue-form">
            <h2>Add to Queue</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="service">Service:</label>
                <select value={service} onChange={(e) => setService(e.target.value)}>
                    <option value="">Select a service</option>
                    <option value="consultation">Consultation</option>
                    <option value="payment">Payment</option>
                    <option value="support">Support</option>
                    <option value="billing">Billing</option>
                </select>
            </div>
            <button type="submit"><FaUserPlus /> Add to Queue</button>
        </form>
    </>
  )
}

export default QueueForm