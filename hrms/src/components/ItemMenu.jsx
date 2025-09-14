import React from 'react'
import { NavLink } from 'react-router'

const ItemMenu = (props) => {
  return (
    
    <NavLink className={` w-[100px] text-center ${props.className}`} to={props.path}>{props.name}</NavLink>
  )
}

export default ItemMenu