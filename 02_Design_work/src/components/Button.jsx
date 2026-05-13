function Button({buttonText="Buy Now"}){
    return(
        <button className="px-4 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">{buttonText}</button>
    )
}
export default Button