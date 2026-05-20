import React from 'react'

const DynamicUserIdPage=async({params})=>{
    const {userId} = await params
    return(
        <div className="">{userId}</div>
    )
} 

export default DynamicUserIdPage
