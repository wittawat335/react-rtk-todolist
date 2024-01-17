import TodoItem from "./TodoItem";
import { useAppSelector } from "../../store/store";

interface Todo {
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const filterTodos: Todo[] = useAppSelector((state: any) => {
    const todos: Todo[] = state.todos;
    const filter: string = state.filter;
    const searchTerm: string = state.searchTerm.toLowerCase();

    return todos.filter((todo: Todo) => {
      const matchesFilter: boolean =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchesSearch: boolean = todo.text
        .toLowerCase()
        .includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });
  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {filterTodos.map((todo: Todo, index: number) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
