import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex justify-center items-center h-screen  flex-col bg-slate-950'>
      {children}
    </div>
  )
}

export default AuthLayout
