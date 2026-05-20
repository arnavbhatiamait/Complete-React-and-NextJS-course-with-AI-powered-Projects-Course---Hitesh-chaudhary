import React from 'react'

const DynamicPostPage=async({params})=>{
    const {postId,userId} = await params
    return(
        <div className="">
            userId:{userId} <br/>
            PostId: {postId}</div>
    )
} 


export default DynamicPostPage