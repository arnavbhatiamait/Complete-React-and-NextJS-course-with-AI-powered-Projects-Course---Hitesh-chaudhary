// !dynamic url -> give inputs in all the levels of dynamic url
// ! we can have multiple dynamic urls in a single page
// ^ here slug is an array which will contain all the inputs given in the url in the form of an array
import React from 'react'

const DocsPage=async({params})=>{
    const {slug} = await params
    return(
        <div className="">
            Docs Page
            ${slug}
        </div>
    )
}

export default DocsPage
