"use client"
import React from 'react'
import {useParams,usePathname} from 'next/navigation'
const TagItemPage = () => {
  const params = useParams()
  console.log(params)
  const pathname = usePathname();

  return (
    <div>
      <h1>Tag Item Page</h1>
      <p>Current path: {pathname}</p>
    </div>
  )
}

export default TagItemPage
