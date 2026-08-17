"use client";

import Modal from "./Modal";
import { useState } from "react";

export default function TodoItem({ task, onDelete, onEdit, onView }) {

  // Manage the toggle state
  const [open, setOpen] = useState(false);

  // const { id, title, status } = task;
  const { id, title, desc, author, date_added, status, priority } = task;

  return (
    <>

      <div className="max-w-sm p-6 ml-3 mr-3 mb-3 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200" key={id}>
        <p
          className={
            status ? "line-through text-gray-400" : ""
          }
        >
          {title}
        </p>
        {/* <p className="mt-2 text-sm text-gray-600">{desc}</p> */}
        {/* <p className="mt-2 text-sm text-gray-600">By: {author} Created at: {date_added}</p> */}
        <p className="mt-2 text-sm text-gray-600">{priority}</p>

        <small className="mt-2 mb-2 px-2 py-1 text-xs bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded capitalize transition">
          {
            status ? "Completed" : "Pending"
          }
        </small>

        {/* Modal toggle */}
        <Modal open={open} onClose={() => setOpen(false)}>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-500">{desc}</p>
          <p className="mt-2 text-sm text-gray-600">By: {author} Created at: {date_added}</p>
          <p className="mt-2 text-sm text-gray-600">{priority}</p>
          <small className="px-2 py-1 text-xs bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded capitalize transition">
            { status ? "Completed" : "Pending" }
          </small>
        </Modal>

        <div className="flex gap-2 mt-2">
          {/* View */}
          <button
            // onClick={() => onView(task)}
            onClick={() => setOpen(true)}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            View
          </button>

          {/* Edit */}
          <button
            onClick={() => onEdit(task)}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Edit
          </button>

          {/* Delete */}
          <button
            onClick={() => onDelete(id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>

    </>
  );

}