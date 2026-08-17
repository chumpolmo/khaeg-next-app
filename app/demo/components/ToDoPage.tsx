"use client"

import { useState } from 'react';
import { toDoList, updateToDoList, appendToDoList } from "../../data/toDoList";

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

export function ToDoPage(){

  // Spread operator
  const toDoListCombined = [...toDoList, ...updateToDoList];

  // Declaration state variables
  const [tasks, setTasks] = useState(toDoListCombined);
  const [status, setStatus] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  // Adding task in object
  const addTask = (title, completed) => {
    console.log(`In addTask: ${title} | ${completed}`);
    const newTask = {
      id: tasks.length+1,
      title: title,
      desc: title+"การเพิ่มรายละเอียดกิจกรรม",
      date_added: new Date(Date.now()).toLocaleString(),
      author: "Beritokai",
      status: completed,
    };

    setTasks([...tasks, newTask]);
  }

  // Deleting task in object
  const deleteTask = (id: BigInt) => {
    setTasks(tasks.filter(item => item.id != id));
  }

  // Editing task
  const editTask = (task) => {
    setEditingTask(task);
  };

  // Updating task
  const updateTask = (id, newTitle, newCompleted) => {
    console.log(`In updateTask: ${id} | ${newTitle} | ${newCompleted}`);
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              title: newTitle,
              status: newCompleted
            }
          : task
      )
    );

    setEditingTask(null);
  };

  // Filter Tasks
  const filteredTasks =
   status === null
      ? tasks
      : tasks.filter(
          (task) =>
            task.status === status
        );

  // Initial variables
  let name = "Chumpol Mokarat";
  const major = "เทคโนโลยีสารสนเทศ (Information Technology)";
  let classYear = 2;
  let classSec = "ทส.ท./ทส.ต.";
  let active = true;

  // Arrow functions
  const isActive = (act: boolean) => {
     if(act)
       return <span style={{ color: "green" }}>กำลังศึกษาอยู่</span>;
     return <span style={{ color: "red" }}>ไม่ได้เป็นนักศึกษาแล้วนะ</span>;
  }

  const tmpTdl = tasks.map((item, index) => {
    // Spread operator
    const updateItem = {...item, ...appendToDoList};

    // Object destructuring
    const { id, title, desc, author, date_added, status, priority } = updateItem;

    return (<div className="max-w-sm p-6 ml-3 mr-3 mb-3 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200" key={index}>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{desc}</p>
        <p className="mt-2 text-sm text-gray-600">{author} / {date_added}</p>
        <p className="mt-2 text-sm text-gray-600">{status}</p>
        <p className="mt-2 text-sm text-gray-600">{priority}</p>
        <button onClick={()=>deleteTask(title)} className='m-3 px-5 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-red-700 transition'>Delete</button>
    </div>);
  });

  // const isActive = (act: boolean) => (act) ? "กำลังศึกษาอยู่" : "ไม่ได้เป็นนักศึกษาแล้วนะ";

  console.log(`Name: ${name}`);
  console.log(`Major: ${major}`);

  return (
    <>

    <div className="relative flex justify-center mt-20 mb-8">
        <div className="w-full max-w-md p-6 bg-indigo-100 border-1 border-gray-200 rounded-xl">
        <h3 className="text-xl font-black text-black uppercase">To Do Lists</h3>
        <p className="mt-2 text-sm font-medium text-black">ชื่อ-สกุล: {name}</p>
        <p className="mt-2 text-sm font-medium text-black">สาขาวิชา: {major}</p>
        <p className="mt-2 text-sm font-medium text-black">กลุ่มเรียน/ชั้นปี: {classSec} / {classYear}</p>
        <p className="mt-2 text-sm font-medium text-black">สถานะภาพนักศึกษา: {isActive(active)}</p>
        </div>
    </div>

    {/* <div className="flex justify-center gap-3">
      <button onClick={()=>addTask()} className='m-3 px-5 py-2 bg-lime-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-lime-700 transition'>Add New Task</button>
    </div> */}

    <ToDoForm addTask={addTask} editingTask={editingTask} updateTask={updateTask} />

    {/* To filter task by status */}
    <div className="flex gap-2 justify-center m-3">
        <button
          onClick={() => setStatus(null)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          All
        </button>

        <button
          onClick={() => setStatus(false)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Pending
        </button>
        
        <button
          onClick={() => setStatus(true)}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Completed
        </button>
    </div>

    {/* <div className="flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tmpTdl}
    </div> */}

      <ToDoList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onEdit={editTask} 
      />

    </>
  );
}