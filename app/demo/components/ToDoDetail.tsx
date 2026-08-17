"use client";

export default function ToDoDetail({
  task,
  onClose,
}) {
  if (!task) {
    return null;
  }

  const {
    id,
    title,
    desc,
    status,
  } = task;

  return (
    <div className="mt-6 ms-3 me-3 border rounded-lg p-5 bg-white shadow">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-bold">
          Task Detail
        </h2>

        <button
          onClick={onClose}
          className="text-gray-500"
        >
          ✕
        </button>

      </div>

      <div className="space-y-3">

        <p>
          <strong>ID:</strong> {id}
        </p>

        <p>
          <strong>Title:</strong> {title}
        </p>

        <p>
          <strong>Description:</strong>{" "}
          {desc}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          <span
            className={
              status ? "text-green-600"
                : "text-orange-500"
            }
          >
            {status ? "Completed" : "Pending" }
          </span>
        </p>

      </div>

      <button
        onClick={onClose}
        className="mt-5 bg-gray-600 text-white px-4 py-2 rounded"
      >
        Close
      </button>

    </div>
  );
}