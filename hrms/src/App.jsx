import { useState } from 'react'
import './App.css'
import All from './components/All'
import Menu from './components/Menu'

function App() {
  

  return (
    <div className="flex flex-col items-center p-[20px]">
      <h1 className='text-2xl font-bold'>#todo</h1>
  
      <div className='mt-5 w-[400px]'>
        <Menu/>
      </div>
    </div>
  )
}

export default App
