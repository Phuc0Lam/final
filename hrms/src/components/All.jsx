import React from "react";
import Menu from "./Menu";
import { useState } from 'react'
const All = () => {
    const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (task.trim() !== "") {
      onAdd(task.trim());
      setTask(""); 
    }
  };
  return (
    <div className="flex flex-col items-center p-[20px]">
      <h1 className="text-2xl font-bold">#todo</h1>

      <div className="mt-5 w-[400px]">
        <Menu content="All" />
      </div>
      <form className="flex justify-between items-center w-[400px] mt-4"  onSubmit={handleSubmit}>
      <input
        className="border border-gray-300 rounded-lg p-2 w-[250px]"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // cập nhật state khi gõ
        placeholder="Add Details"
      />
      <button className="bg-blue-500 text-white p-2 rounded w-[100px]" type="submit">Add</button>
    </form>
    </div>
  );
};

export default All;
