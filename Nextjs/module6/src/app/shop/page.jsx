"use client"
import React from 'react'
import {useParams} from 'next/navigation'
const ShopPage = () => {
  const params = useParams()
  console.log(params)

  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  )
}

export default ShopPage
