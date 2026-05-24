"use client"
import React from 'react'
import {useParams} from 'next/navigation'
const ShopTagItem = () => {
  const params = useParams()
  console.log(params)

  return (
    <div>
      <h1>Shop Tag Item Page</h1>
    </div>
  )
}

export default ShopTagItem
