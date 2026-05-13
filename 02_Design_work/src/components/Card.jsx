import React from 'react'
import Button from './Button.jsx'

function Card({title="Card Title", buttonText="Buy Now", imageurl="https://images.unsplash.com/photo-1509042239860-f550ce710b93",...props}) {
    return (
        <div>
            <div className="max-w-sm bg-white border-gray-200 mt-8 shadow overflow-hidden rounded-xl transition-shadow">
                <img src={imageurl} alt="Sample Image" className="h-48 w-full object-cover" />
                <div className="p-4 flex flex-col justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800 ">{title}</h2>
                    <p className="mt-2 text-gray-600 text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos porro fuga vel at voluptatem.</p>
                    <Button buttonText={buttonText} />
                </div>
            </div>

        </div>
    )
}

export default Card