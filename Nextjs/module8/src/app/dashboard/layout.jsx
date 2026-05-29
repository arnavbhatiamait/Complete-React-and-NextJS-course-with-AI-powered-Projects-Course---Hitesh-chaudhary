import React from 'react'

export const metadata = {
  title: "Dashboard Layout",
  description: "This is the dashboard layout of the application",
};

const DashboardLayout = ({children}) => {
  return (
    <div>
      Dashboard Layout
      {children}
    </div>
  )
}

export default DashboardLayout
