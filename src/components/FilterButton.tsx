import {
  deleteAllTodo,
  filterTodo,
  setAllComplete,
  setAllInComplete,
} from "../store/slices/todoSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

export const FilterButtons = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector((state: any) => state.filter);
  const handleFilter = (filter: string) => {
    dispatch(filterTodo(filter));
  };
  return (
    <div className="flex space-x-4 items-center">
      {/* ddlStatus */}
      <select
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">All</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>
      {/* btnMarkAllCompleted */}
      <button
        className="text-sm px-2 py-1 bg-purple-500 text-white rounded ml-2"
        onClick={() => dispatch(setAllComplete())}
      >
        Mark All Completed
      </button>
      {/* btnMarkAllInCompleted */}
      <button
        className="text-sm px-2 py-1 bg-orange-600 text-white rounded ml-2"
        onClick={() => dispatch(setAllInComplete())}
      >
        Mark All InCompleted
      </button>
      {/* btnRemoveAll */}
      <button
        className="text-sm px-2 py-1 bg-red-600 text-white rounded ml-2"
        onClick={() => dispatch(deleteAllTodo())}
      >
        Delete All Todo
      </button>
    </div>
  );
};
