import { BsPlus, BsSearch } from "react-icons/bs";
import { FilterButtons } from "../components/FilterButton";
import TodoList from "../components/Todo/TodoList";
import { useAppDispatch } from "../store/store";
import { useState } from "react";
import { addTodo, updateSearchTodo } from "../store/slices/todoSlice";

export default function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };
  const handleAddTodoClick = () => {
    if (newTodo.trim() !== "") {
      handleAddTodo(newTodo.trim());
      setNewTodo("");
    }
  };
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    dispatch(updateSearchTodo(value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        Personal TODO APP
      </h2>
      {/* input text add */}
      <div className="flex items-center mb-4">
        <input
          id="addTodoInput"
          type="text"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Add Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          <BsPlus size={20} />
        </button>
      </div>
      {/* filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons />
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------ */}
      <TodoList />
    </div>
  );
}
