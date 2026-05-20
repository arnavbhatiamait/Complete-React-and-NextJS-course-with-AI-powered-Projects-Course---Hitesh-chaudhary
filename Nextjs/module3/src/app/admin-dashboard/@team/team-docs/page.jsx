import React from 'react'
import Link from 'next/link'
function TeamDocsPage() {
  return (
    <div className='bg-red-500'>
      <Link href="/admin-dashboard">Back to Team</Link>
      <h1>Team Docs</h1>
      <p>This is the Team Docs page.</p>
    </div>
  )
}

export default TeamDocsPage