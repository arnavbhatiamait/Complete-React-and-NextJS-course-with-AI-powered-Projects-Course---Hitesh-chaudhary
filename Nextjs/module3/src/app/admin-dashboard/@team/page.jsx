import React from 'react'
import Link from 'next/link'
const TeamPage = () => {
  return (
    <div className='bg-blue-500'>
      Team Page
      <br />
      <Link href="/admin-dashboard/team-docs">Team Docs</Link>
    </div>
  )
}

export default TeamPage
