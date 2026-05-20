import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1>Auth Login</h1>
      {children}
    </div>
  )
}

export default layout
