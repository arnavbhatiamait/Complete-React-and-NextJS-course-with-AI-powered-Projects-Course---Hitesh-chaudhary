"use client"
// import { Forum } from 'next/font/google'
import { Form } from "next/form";
import React from 'react'
import { updateStatus } from "@/actions/contact";
const statusButton = ({id}) => {
    const action = updateStatus.bind(null, id);
  return (
    <form action={action} >
        <button className='bg-green-500 text-white px-3 py-1 mt-2?'>
            Mark as Resolved
        </button>
    </form>
  )
}

export default statusButton
