import { LoginForm } from '@/components/login-form'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex min-h-svh bg-background flex-col justify-center items-center gap-6  p-6 md:p-10'>
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
