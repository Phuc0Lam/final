import React from 'react'
import { useState, useEffect } from "react";
import Menu from './Menu'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
const completed = () => {
 // State quản lý danh sách task
  const [tasks, setTasks] = useState(() => {
    // Lấy dữ liệu từ localStorage khi load lần đầu
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];

    
  });
   const toggleTask = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, active: !t.active } : t
    );
    setTasks(updatedTasks);
  };

    const deleteTask = (id) => {
  const updatedTasks = tasks.filter((t) => t.id !== id);
  setTasks(updatedTasks);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};
  const deleteAll = () => {
  setTasks([]);
  localStorage.removeItem("tasks"); 
};
  return (
    <div className="flex flex-col items-center p-[20px]">
      <h1 className='text-2xl font-bold'>#todo</h1>
  
      <div className='mt-5 w-[400px]'>
        <Menu content='Completed'/>
      </div>
      <div className="mt-5 w-[400px]">
        {tasks.filter((item)=>{ return !item.active}).map((t) => (
          <div className="flex justify-between items-center gap-[10px]">
            <div className='flex items-center gap-[10px]'>
                <input
              type="checkbox"
              checked={!t.active}
              onChange={() => toggleTask(t.id)}
            />
            <span>
              {t.title}
            </span>
            </div>
            <button
              onClick={() => deleteTask(t.id)}
              className="text-gray-500 hover:text-red-700"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
        
  <div className='flex justify-end mt-4'><button className='items-center bg-red-500 text-white rounded-lg p-2' onClick={deleteAll}><FontAwesomeIcon icon={faTrash} /> Delete All </button></div>

   </div>
    </div>
  )
}

export default completed