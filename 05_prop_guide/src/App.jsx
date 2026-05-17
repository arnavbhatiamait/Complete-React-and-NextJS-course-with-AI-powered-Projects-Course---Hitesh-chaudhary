
import { useState } from 'react'
import BasicProps from './components/BasicProps'
import ChildrenProps from './components/ChildrenProps'
import ComplexProps from './components/ComplexProps'
import RefProps from './components/RefProps'
import ThemeToggler, { ThemeProvider } from './components/ThemeToggler'
import './App.css'

function Navigation() {
  const isDark = true
  const sections = [
    { id: 'basic', label: 'Basic Props', icon: '📦' },
    { id: 'ref', label: 'Ref Props', icon: '🔗' },
    { id: 'children', label: 'Children Props', icon: '👶' },
    { id: 'complex', label: 'Complex Props', icon: '🧩' },
    { id: 'theme', label: 'Theme Toggler', icon: '🎨' }
  ]
  return (
    <nav className={`sticky top-0 z-50 shadow-md transition-colors ${isDark ? 'bg-gray-800' : 'bg-white'} p-4`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button key={section.id} className={`px-4 py-2 rounded-lg bg-blue-600 font-medium text-white mr-2 mt-2 hover:bg-blue-800`}>
              <span className='mr-2'>{section.icon}</span>
              {section.label}
            </button>
          ))}

        </div>
      </div>

    </nav>)
}

function AppContent() {
  const isDark = true;
  return (
    <div className={`min-h-screen bg-gray-800`}>
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <header
          className={` text-center mb-12 transition-colors ${isDark ? 'text-white' : 'text-gray-800'} `}
        >
          <h1 className='text-5xl font-bold mb-4'>
            React props Guide
          </h1>
          <p
          className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
          >A comprehensive guide to understanding and using React props effectively.</p>
        </header>

        <div className="space-y-8">
          <div id="basic" className='scroll-mt-200'>
            <BasicProps />

          </div>
           <div id="ref" className='scroll-mt-200'>
            <RefProps />

          </div>
            <div id="children" className='scroll-mt-200'>
            <ChildrenProps />
            
          </div>

            <div id="complex" className='scroll-mt-200'>  
            <ComplexProps />
          </div>
          
            <div id="theme" className='scroll-mt-200'>  
            <ThemeToggler />
            </div>
        </div>
        <footer className={`mt-12 text-center pb-8 transition-colors ${isDark ? "text-gray-400":"text-gray-600"}`}>

          <p className='text-sm'>
            &copy; 2026 React Props Guide. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
      {/* <h1>Vite + React</h1> */}
    </>
  )
}


export default App
