"use client";

export default function TodoItem({ task, onDelete, onEdit }) {

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
        <p className="mt-2 text-sm text-gray-600">{desc}</p>
        <p className="mt-2 text-sm text-gray-600">By: {author} Created at: {date_added}</p>
        <p className="mt-2 text-sm text-gray-600">{priority}</p>

        <small>
          {
            status ? "Completed" : "Pending"
          }
        </small>

        <div className="flex gap-2">
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