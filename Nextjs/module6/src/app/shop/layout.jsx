import React from 'react'
import { Sidebar } from '../../components/sidebar'

const ShopLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className='flex-1 p-6'>
                {children}
            </main>
        </div>
    )
}

export default ShopLayout
