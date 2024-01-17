import { FC } from "react";

import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { useAppDispatch } from "../../store/store";
import {
  deleteTodo,
  setComplete,
  setInComplete,
  toggleTodo,
} from "../../store/slices/todoSlice";

interface TodoItemProps {
  todo: {
    text: string;
    completed: boolean;
  };
  index: number;
}

const TodoItem: FC<TodoItemProps> = ({ todo, index }) => {
  const dispatch = useAppDispatch();

  const handleToggleTodo = (index: number) => {
    console.log(index);
    dispatch(toggleTodo(index));
  };
  const handleMarkCompleted = (index: number) => {
    dispatch(setComplete(index));
  };
  const handleMarkIncomplete = (index: number) => {
    dispatch(setInComplete(index));
  };
  const handleRemoveTodo = (index: number) => {
    dispatch(deleteTodo(index));
  };

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}.</span>
        <span
          className={`mr-4 ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      {/* btnToggle */}
      <div className="space-x-3 ml-8">
        <button
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => handleToggleTodo(index)}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        {/* btnRemove */}
        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => handleRemoveTodo(index)}
        >
          <FaTrash />
        </button>
        {/* btnComplete && btnInComplete */}
        {!todo.completed && (
          <button
            className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => handleMarkCompleted(index)}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => handleMarkIncomplete(index)}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
