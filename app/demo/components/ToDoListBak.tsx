import ToDoItem from "./ToDoItem";

export default function TodoList({ tasks, onDelete, onToggle }) {

  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No Task
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {
        tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      }
    </div>
  );
}