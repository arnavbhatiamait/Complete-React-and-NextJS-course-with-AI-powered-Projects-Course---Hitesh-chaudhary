import React from 'react'

const DynamicCommentIdPage=async({params})=>{
    const {commentId,postId,userId} = await params
    return(
        <div className="">
            userId:{userId} <br/>
            PostId: {postId} <br/>
            CommentId: {commentId}</div>
    )
} 

export default DynamicCommentIdPage
