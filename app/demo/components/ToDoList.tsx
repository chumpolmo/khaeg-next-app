import ToDoItem from "./ToDoItem";

export default function TodoList({ tasks, onDelete, onEdit, onView }) {

  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No Task
      </p>
    );
  }

  return (
    <div className="space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {
        tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
            onView={onView}
          />
        ))
      }
    </div>
  );
}