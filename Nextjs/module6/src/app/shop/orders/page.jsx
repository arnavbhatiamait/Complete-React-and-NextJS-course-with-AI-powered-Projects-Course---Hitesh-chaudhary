"use client"
import React from 'react'
import {useRouter} from 'next/navigation'
const orders = () => {
    const router=useRouter();
  return (
    <>
    <div className='hover:cursor-pointer' onClick={()=>router.push('/shop/products')}>
        Go to Products
    </div>
        <button onClick={(e)=>{router.refresh()}}>Refresh</button>
    </>
  )
}

export default orders
