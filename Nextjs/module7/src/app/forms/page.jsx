import React from 'react'
import Form from 'next/form'
import { submitUserData } from '@/actions/actions'
const formPage = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold underline'>Form Page</h1>
        <Form action={submitUserData}>
            <input type="text" name='name' placeholder='Enter your name' className='border-2 border-gray-300 p-2 rounded-md'/>
            <input type="email" name='email' placeholder='Enter your email' className='border-2 border-gray-300 p-2 rounded-md'/>
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>Submit</button>
        </Form>
    </div>
  )
}

export default formPage
