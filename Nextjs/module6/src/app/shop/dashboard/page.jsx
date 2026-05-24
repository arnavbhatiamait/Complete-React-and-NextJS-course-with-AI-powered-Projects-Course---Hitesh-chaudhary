"use client"
import React from 'react'
import {useSearchParams} from "next/navigation";
import Link from "next/link";

const dashboard = () => {
    const searchParams = useSearchParams();
    const tab = searchParams.get("tab") || "analytics";

  return (
    <div>
        <h1 className='text-2xl font-bold mb-4'>Dashboard Page</h1>
        <div className='flex gap-4 mb-6'>
            <Link href="/shop/dashboard?tab=analytics" className={` ${tab==="analytics" ? "font-bold underline" : ""}`}>
                Analytics
            </Link>
            <Link href="/shop/dashboard?tab=sales" className={` ${tab==="sales" ? "font-bold underline" : ""}`}>
                Sales
            </Link>
            <Link href="/shop/dashboard?tab=customers" className={` ${tab==="customers" ? "font-bold underline" : ""}`}>
                Customers
            </Link>
        </div>
        <div>
            {/* Content for the selected tab would go here */}
            {tab === "analytics" && <p>Analytics Content</p>}
            {tab === "sales" && <p>Sales Content</p>}
            {tab === "customers" && <p>Customers Content</p>}
        </div>
    </div>
  )
}

export default dashboard
