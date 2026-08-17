"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import { dataItem, appendItem } from "../data/dataItem";
import { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import Modal from "./components/Modal";

export default function ToDoList(){

  const toDoList = [...dataItem, ...appendItem];
  const [tasks, setTasks] = useState(toDoList);
  const [numOfTasks, setNoft] = useState(tasks.length);
  const [status, setStatus] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  
  const handleView = (task) => {
    setSelectedTask(task);
    setOpen(true);
  };

  const filteredTasks = 
        status == null ? tasks 
        : tasks.filter(
          (item) => item.status == status
        );

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

  const onEdit = (t) => {
    alert(`งานที่คุณต้องการแก้ไข ${t}`);
  }

  const onDelete = (id) => {
    alert(`คุณต้องการลบข้อมูล รหัสงาน ${id}?`);
  }

  const tmpTdl = filteredTasks.map((item, index) => {
    const {id, title, desc, author, date_added, status} = item;
    return (<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 w-full" key={id}>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{desc}</p>
        <p className="mt-2 text-sm text-gray-600">{author} / {date_added}</p>
        <p className="mt-2 text-sm text-gray-600">{status}</p>

        <div className="flex gap-2 mt-2">
          {/* View */}
          <button onClick={(e)=>handleView(item)} className="bg-green-500 text-white px-3 py-1 rounded">View</button>

          {/* Edit */}
          <button onClick={(e)=>onEdit(item)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>

          {/* Delete */}
          <button onClick={(e)=>onDelete(id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
      </div>
    </div>);
  });

  const addTask = (title, status) => {
    const newTask = {
        id: tasks.length+1,
        title: title,
        desc: "รายละเอียดของงานที่เพิ่ม",
        date_added: "17/08/2569",
        author: "Beritokai",
        status: status
    };

     setTasks([...tasks, newTask]);
     setNoft(tasks.length+1);
  }

  //   const isActive = (act: boolean) => (act) ? "กำลังศึกษาอยู่" : "ไม่ได้เป็นนักศึกษาแล้วนะ";

  console.log(`Name: ${name}`);
  console.log(`Major: ${major}`);

  return (
    <>
      <Header />

    <div className="relative flex justify-center mt-20 mb-8">
        <div className="w-full max-w-md p-6 bg-yellow-300 border-2 border-black rounded-none shadow-lg">
        <h3 className="text-xl font-black text-black uppercase">To Do Lists</h3>
        <p className="mt-2 text-sm font-medium text-black">ชื่อ-สกุล: {name}</p>
        <p className="mt-2 text-sm font-medium text-black">สาขาวิชา: {major}</p>
        <p className="mt-2 text-sm font-medium text-black">กลุ่มเรียน/ชั้นปี: {classSec} / {classYear}</p>
        <p className="mt-2 text-sm font-medium text-black">สถานะภาพนักศึกษา: {isActive(active)}</p>
        </div>

    </div>

 <ToDoForm addTask={addTask} />

<div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg m-3">
  <div className="flex items-center gap-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg>

        <p className="text-gray-700 font-medium mt-1">จำนวนงานที่ต้องทำ {numOfTasks} รายการ</p>
        {/* <button onClick={addTask} className="ms-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">เพิ่มงาน</button> */}
  </div>
        <div>
          <button onClick={() => setStatus(null)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">[A] All</button>
          <button onClick={() => setStatus(true)}
                className="ms-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">[C] Completed</button>
          <button onClick={() => setStatus(false)}
                className="ms-2 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">[P] Pending</button>
        </div>
</div>

    <div className="space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-3">
        {tmpTdl}
    </div>

    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
        setSelectedTask(null);
      }}
      task={selectedTask}
    />

    <Footer />
    </>
  );
}