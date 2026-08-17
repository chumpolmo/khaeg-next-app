"use client";

export default function TodoItem({ task, onDelete, onToggle }) {

  const { id, title, completed } = task;

  return (
    <div className="flex justify-between items-center border rounded p-3">
      <div>
        <p
          className={
            completed
              ? "line-through text-gray-400"
              : ""
          }
        >
          {title}
        </p>

        <small>
          {
            completed
              ? "Completed"
              : "Pending"
          }
        </small>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onToggle(id)}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Toggle
        </button>

        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );

}