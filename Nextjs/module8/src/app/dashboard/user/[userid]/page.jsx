import React from 'react'

export async function generateMetadata({params}) {
    const {userid} = await params;
    return {
        title: `User ${userid} Page`,
        description: `This is the user ${userid} page of the application`,
    }
}


const UserPage = async({params}) => {
    const {userid} = await params;
    console.log(userid);
  return (
    <div>
      User Page
        <p>User ID: {userid}</p>
    </div>
  )
}

export default UserPage
