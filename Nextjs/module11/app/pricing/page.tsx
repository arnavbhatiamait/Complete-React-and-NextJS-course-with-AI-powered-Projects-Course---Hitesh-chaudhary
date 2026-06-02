import { requiredAuth } from '@/lib/auth-guard'
import React from 'react'

const PricingPage = async () => {
    await requiredAuth();
  return (
    <div>
      Pricing Page 
    </div>
  )
}

export default PricingPage
