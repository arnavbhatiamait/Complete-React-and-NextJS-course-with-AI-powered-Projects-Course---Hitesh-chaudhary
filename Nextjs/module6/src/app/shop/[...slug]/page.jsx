"use client"
import React from 'react'
import {useParams} from 'next/navigation'
const MultiArgSlugPage = () => {
  const params = useParams()
  console.log(params)

  return (
    <div>
      <h1>Multi-Argument Slug Page</h1>
    </div>
  )
}

export default MultiArgSlugPage
