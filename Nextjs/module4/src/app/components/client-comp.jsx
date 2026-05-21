"use client"
import React from 'react'
import { useState } from 'react'
const ClientComp = () => {
  const [name, setName] = useState("John Doe")
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => setName("AABC")}>Change Name</button>
    </div>
)

}

export default ClientComp