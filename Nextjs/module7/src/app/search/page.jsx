import React from 'react'

const SearchPage = async ({searchParams}) => {
    const {query} = await searchParams
    console.log(query)
    const res=await fetch(`https://jsonplaceholder.typicode.com/todos/${query}`)
    const data=await res.json()
    console.log(data)
    console.log(query)

    return (
    <div>
        <h2>{data.title}</h2>
        <p>{data.completed ? 'Completed' : 'Not Completed'}</p>
    </div>
  )
}

export default SearchPage
