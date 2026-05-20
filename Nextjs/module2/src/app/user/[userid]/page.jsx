// ! dynamic route
// import React from 'react'

// function page() {
//   return (
//     <div>page</div>
//   )
// }

// export default page


import React from 'react'

const UserPage = async ({params})=>{
    // console.log(params)
    const {userid} = await params
    return (
        <div>User Page {userid}</div>
    )
}

export default UserPage