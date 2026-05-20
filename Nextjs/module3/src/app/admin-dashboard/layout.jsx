import React from 'react'

const AdminLayout = ({children,analytics,team}) => {
  return (
    <div className='grid grid-cols-2 gap-4 p-4 h-screen'>
        <div className="overflow-auto">
          {children}
        </div>
        <div className="grid grid-row-2 gap-4">
<div className="overflow-auto">
          {analytics}
        </div>   
        <div className="overflow-auto">
            {team}
        </div>   
        </div>
    </div>
  )
}

export default AdminLayout
