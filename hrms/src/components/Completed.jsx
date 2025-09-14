import React from 'react'
import Menu from './Menu'
const completed = () => {
  return (
    <div className="flex flex-col items-center p-[20px]">
      <h1 className='text-2xl font-bold'>#todo</h1>
  
      <div className='mt-5 w-[400px]'>
        <Menu content='Completed'/>
      </div>
    </div>
  )
}

export default completed