import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div>
      <Link href="/one/two">Go to Two</Link>
      <Link href="/three">Go to Three</Link>
    </div>
  )
}

export default page
