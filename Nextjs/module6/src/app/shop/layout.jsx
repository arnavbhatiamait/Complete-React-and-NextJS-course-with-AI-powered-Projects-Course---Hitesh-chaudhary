import React from 'react'
import { Sidebar } from '../../components/sidebar'

const ShopLayout = ({ children }) => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <main className='flex-1 p-6'>
            {/* {children} */}

        </main>
      </div>
    </div>
  )
}

export default ShopLayout
