"use client"
import React from 'react'
import Form from 'next/form'
import { submitUserData } from '@/actions/actions'
import {useRouter} from "next/navigation"
const formPage = () => {
  const router = useRouter()
  return (
    <div>
        <h1 className='text-3xl font-bold underline'>Form Page</h1>
        <Form action={submitUserData}>
            <input type="text" name='name' placeholder='Enter your name' className='border-2 border-gray-300 p-2 rounded-md'/>
            <input type="email" name='email' placeholder='Enter your email' className='border-2 border-gray-300 p-2 rounded-md'/>
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>Submit</button>
        </Form>
        <h1>
            Search Form
        </h1>
        <Form action={"/search"}>
            <input type="text" name='query' placeholder='Search...' className='border-2 border-gray-300 p-2 rounded-md'/>
            <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded-md'>Search</button>
        </Form>
        <button onClick={()=>router.back()} className='bg-gray-500 text-white px-4 py-2 rounded-md mt-4'>Go Back</button>
    </div>
  )
}

export default formPage
