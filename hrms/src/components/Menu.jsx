import React from 'react'
import ItemMenu from './ItemMenu'

const menuList = [
        {name : "All" ,path:"/All"},
        {name : "Active" ,path:"/Active"},
        {name : "Completed" ,path:"/Completed"}
    ]

const Menu = (props) => {
    
  return (
    <div className='flex justify-around gap-[60px] border-b border-gray-300'>
        {menuList.map((item)=>{
            if (item.name===props.content) return <ItemMenu content={props.content} name={item.name} path={item.path} className=' border-b-4 border-blue-500'/>
            else return <ItemMenu content={props.content} name={item.name} path={item.path} />
        })}
    </div>
  )
}

export default Menu