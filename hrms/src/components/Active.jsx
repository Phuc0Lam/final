import { useState, useEffect } from "react";
import React from 'react'
import Menu from './Menu'
const Active = () => {
  // State quản lý danh sách task
  const [tasks, setTasks] = useState(() => {
    // Lấy dữ liệu từ localStorage khi load lần đầu
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // State quản lý input form
  const [task, setTask] = useState("");

  // Mỗi khi tasks thay đổi -> lưu lại vào localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() !== "") {
      const newTask = {
        id: Date.now(),
        title: task.trim(), 
        active: true      
      };
      setTasks([...tasks, newTask]);
      setTask("");
    }
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, active: !t.active } : t
    );
    setTasks(updatedTasks);
  };
  return (
    <div className="flex flex-col items-center p-[20px]">
      <h1 className="text-2xl font-bold">#todo</h1>

      <div className="mt-5 w-[400px]">
        <Menu content="Active" />
      </div>

      
      <form
        className="flex justify-between items-center w-[400px] mt-4"
        onSubmit={handleSubmit}
      >
        <input
          className="border border-gray-300 rounded-lg p-2 w-[250px]"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)} // Cập nhật state khi gõ
          placeholder="Add Details"
        />
        <button
          className="bg-blue-500 text-white p-2 rounded w-[100px]"
          type="submit"
        >
          Add
        </button>
      </form>

      <div className="mt-5 w-[400px]">
        {tasks.filter((item)=>{ return item.active}).map((t) => (
          <div className="flex items-center gap-[10px]">
            <input
              type="checkbox"
              checked={!t.active}
              onChange={() => toggleTask(t.id)}
            />
            <span >
              {t.title}
            </span>

            
          </div>
        ))}
   </div>
    </div>
  );
};


export default Active