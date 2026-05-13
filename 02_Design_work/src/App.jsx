

function App() {

  return (
      <div className="min-h-screen bg-black flex   justify-center items-center flex-col p-4">
      <h1 className='text-blue-600 dark:text-green-500 border-2 p-4 rounded-xl'>Hello, React!</h1>
      <div className="max-w-sm bg-white border-gray-200 mt-8 shadow overflow-hidden rounded-xl transition-shadow">
        <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93" alt="Sample Image" className="h-48 w-full object-cover"/>
        <div className="p-4 ">
          <h2 className="text-lg font-semibold text-gray-800 ">Card Title</h2>
          <p className="mt-2 text-gray-600 text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos porro fuga vel at voluptatem.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg  text-white hover:bg-blue-700">Buy Now</button>
        </div>
      </div>

      <div className="max-w-sm bg-white border-gray-200 mt-8 shadow overflow-hidden rounded-xl transition-shadow">
        <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93" alt="Sample Image" className="h-48 w-full object-cover"/>
        <div className="p-4 ">
          <h2 className="text-lg font-semibold text-gray-800 ">Card Title</h2>
          <p className="mt-2 text-gray-600 text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos porro fuga vel at voluptatem.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg  text-white hover:bg-blue-700">Buy Now</button>
        </div>
      </div>

      </div>
  )
}

export default App
