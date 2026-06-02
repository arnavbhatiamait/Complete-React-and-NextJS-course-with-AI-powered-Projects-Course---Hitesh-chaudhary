import PricingCards from '@/components/pricing-card';
import { requiredAuth } from '@/lib/auth-guard'
import { STRIPE_PRICE_ID } from '@/lib/stripe';
import React from 'react'

const pricingTiers=[
    {
        id:"free",
        name:"Free",
        price:0,
        priceId:null,
        currency:"USD",
        interval:"month",
        features:[
            "Access to basic features",
            "Limited usage",
            "Community support"
        ],
        isPopular:false
    },
    {
        id:"premium",
        name:"Premium",
        price:10,
        priceId:STRIPE_PRICE_ID.premium,
        currency:"USD",
        interval:"month",
        features:[
            "Access to all features",
            "Unlimited usage",
            "Priority support"
        ],
        isPopular:true
    }
]

const PricingPage = async () => {
    await requiredAuth();
  return (
    <div className="min-h-screen py-16 px-4">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-normal mb-4">Sample Pricing</h1>
            <p className="text-muted-foreground mt-2">
                Choose the plan that best fits your needs. 
            </p>

        </div>
<PricingCards tiers={pricingTiers} />
    </div>
  )
}

export default PricingPage
