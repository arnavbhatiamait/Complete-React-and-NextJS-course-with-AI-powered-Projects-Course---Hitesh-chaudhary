import { requireUnAuth } from '@/lib/auth-guard';
import React from 'react'

const AuthLayout = async ({children}:{children:React.ReactNode}) => {
  await requireUnAuth();
  return (
    <div className='flex justify-center items-center h-screen  flex-col bg-slate-950'>
      {children}
    </div>
  )
}

export default AuthLayout
