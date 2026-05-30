import React from 'react'

// ! dynamic openGraph Image

const SlugPage = async({params}) => {
  const {slug} = await params;
  return (
    <div>
      Slug Page
      <p>Slug: {slug}</p>

    </div>
  )
}

export default SlugPage
