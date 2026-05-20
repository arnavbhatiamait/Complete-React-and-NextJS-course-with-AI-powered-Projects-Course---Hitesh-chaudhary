// ! Optional catch-all routes
// ? Catch all segments in the url -> [...slug] -> slug is an array which will contain all the inputs given in the url in the form of an array
// !dynamic url -> give inputs in all the levels of dynamic url
// ! we can have multiple dynamic urls in a single page
// ^ here slug is an array which will contain all the inputs given in the url in the form of an array   
// ! catch all route -> it will catch all the urls which are not defined in the routes and will give 404 error
// ! optional catch all route -> it will catch all the urls which are not defined in the routes and will give 404 error but it will also catch the url which is defined in the routes and will give the output of that url given by [[...slug]] -> [[...slug]]
// * example -> if we have a route like /docs/nextjs/next13 then slug will be an array which will contain ['nextjs','next13'] and we can use this array to give the output of the page
// * example ->  optional catch all route -> if we have a route like /docs/nextjs/next13 then slug will be an array which will contain ['nextjs','next13'] and we can use this array to give the output of the page but if we have a route like /docs then slug will be an empty array and we can use this empty array to give the output of the page

import React from 'react'

const DocsPage=async({params})=>{

    const {slug} = await params
    console.log(slug);
    return(
        <div className="">
            Docs Page
            ${slug}
        </div>
    )
}

export default DocsPage