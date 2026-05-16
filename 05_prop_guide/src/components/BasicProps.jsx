import React, { useState } from 'react'

function Button({ text, color, size, onClick, disabled }) {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={
                `px-6 py-2 rounded-lg font-medium transition-all duration-300
            ${size === 'small' ? 'text-sm sx-4 py-1' : ''}
            ${size === 'large' ? 'text-lg px-8 py-3' : ''}
             ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
      ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600 text-white" : ""}
      ${color === "danger" ? "bg-red-500 hover:bg-red-600 text-white" : ""}
      ${color === "success" ? "bg-green-500 hover:bg-green-600 text-white" : ""}
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`
            }
        >
            {text}
        </button>
    )
}

function BasicProps() {
    const [clickCount, setClickCount] = useState(0);
    return (
        <section className='p-8 bg-white  rounded-lg  shadow-2xl'>
            <h2 className='text-3xl font-bold mb-4 text-gray-800'>Basic Props</h2>
            <p>
                Props are arguments passed to React components. They allow you to pass data from parent to child components.
            </p>
            <div className="space-y-4">
                <h3 className='text-xl font-semibold mb-3 text-gray-700' >Different Colors </h3>
                <div className="flex flex-wrap gap-3">
                    <Button
                        text="Primary Button"
                        color="primary"
                        onClick={() => setClickCount(clickCount + 1)}

                    />
                    <Button
                        text="Secondary Button"
                        color="secondary"
                        onClick={() => setClickCount(clickCount + 1)}

                    />
                    <Button
                        text="Danger Button"
                        color="danger"
                        onClick={() => setClickCount(clickCount + 1)}
                    />
                    <Button
                        text="Success Button"
                        color="success"
                        onClick={() => setClickCount(clickCount + 1)}
                    />
                </div>
            </div>

            <div className="space-y-4">
                <h3 className='text-xl font-semibold mb-3 text-gray-700' >Different Sizes </h3>
                <div className="flex flex-wrap gap-3">
                    <Button
                        text="Small Button"
                        color="primary"
                        size="small"

                        onClick={() => setClickCount(clickCount + 1)}

                    />
                    <Button
                        text="Medium Button"
                        color="secondary"
                        size="medium"
                        // disabled='true'
                        onClick={() => setClickCount(clickCount + 1)}

                    />
                    <Button
                        text="Large Button"
                        color="danger"
                        size="large"
                        onClick={() => setClickCount(clickCount + 1)}
                    />
                    </div>
                    <div className="space-y-4">
                        <h3 className='text-xl font-semibold mb-3 text-gray-700' >Different Sizes </h3>
                        <div className="flex flex-wrap gap-3">
                            <Button
                                text="Disabled Button"
                                color="primary"
                                size="medium"
                                disabled={true}
                                onClick={() => (alert("This button is disabled"))}
                            />
                            <Button
                                text="Enabled Button"
                                color="secondary"
                                size="medium"
                                onClick={() => setClickCount(clickCount + 1)}
                            />
                        </div>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg ">
                        <p className='text-lg font-medium text-gray-700'>Click Count: {" "} <span className='text-blue-600 font-bold'>
                            {clickCount}
                            </span>
                            </p>
                    </div>
                </div>
            



        </section >
    )
}

export default BasicProps