"use client";

import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

export default function TodoApp() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Study ES6",
      completed: true,
    },
  ]);

  const addTask = (title, completed) => {
    if (!title.trim()) return;

    const newTask = {
      id: tasks.length+1,
      title: title,
      completed: completed,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6">

      <h1 className="text-3xl font-bold mb-6">
        To Do List
      </h1>

      <ToDoForm addTask={addTask} editingTask={editingTask} updateTask={updateTask} />

      <ToDoList
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
        onView={viewTask}
      />

    </div>
  );
  
}
