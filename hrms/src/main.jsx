import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes  } from 'react-router'
import All from './components/All'
import Active from './components/Active.jsx'
import Completed from './components/completed.jsx'
createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Routes>
        <Route index element={<App/>}/>
        
        <Route path='/All' element={<All/>}/>
        <Route path='/Active' element={<Active/>}/>
        <Route path='/Completed' element={<Completed/>}/>

      </Routes>
    </BrowserRouter>
)
