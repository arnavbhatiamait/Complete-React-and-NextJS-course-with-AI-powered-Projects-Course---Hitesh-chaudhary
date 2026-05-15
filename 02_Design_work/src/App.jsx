import Card from "./components/Card"
import Header from "./components/Header"
import Hero from "./components/Hero"
import { Button } from "./components/ui/button.tsx"
function App() {

  return (

    <div className="min-h-screen bg-black flex   justify-center 
    items-center flex-col overflow-hidden p-4">
      <Hero />
      <Button variant="outline" >Click Me</Button>
      <Header />
      <h1 className='text-blue-600 dark:text-green-500 border-2 p-4 rounded-xl'>Hello, React!</h1>
      <div className="flex gap-4 flex-wrap  mt-8">
        <Card
          title="Buy Python course"
          buttonText="join now"
          imageurl="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        />
        <Card
          title="Buy Nodejs course"
          buttonText="join now"
          imageurl="https://images.pexels.com/photos/18681382/pexels-photo-18681382.jpeg"
        />
        <Card
          title="Somewhere in Europe"
          buttonText="Buy me"
          imageurl="https://images.pexels.com/photos/2519823/pexels-photo-2519823.jpeg"
        />
      </div>
    </div>
  )
}

export default App
