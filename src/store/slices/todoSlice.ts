import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  text: string;
  completed: boolean;
}

type State = {
  todos: Todo[];
  filter: string;
  searchTerm: string;
};

const initialState: State = { todos: [], filter: "ALL", searchTerm: "" };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({ text: action.payload, completed: false });
      state.filter;
      state.searchTerm;
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo: Todo, index: number) =>
        index === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      state.filter;
      state.searchTerm;
    },
    setComplete: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo: Todo, index: number) =>
        index === action.payload ? { ...todo, completed: true } : todo
      );
      state.filter;
      state.searchTerm;
    },
    setAllComplete: (state) => {
      state.todos = state.todos.map((todo: Todo) => ({
        ...todo,
        completed: true,
      }));
      state.filter;
      state.searchTerm;
    },
    setInComplete: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo: Todo, index: number) =>
        index === action.payload ? { ...todo, completed: false } : todo
      );
      state.filter;
      state.searchTerm;
    },
    setAllInComplete: (state) => {
      state.todos = state.todos.map((todo: Todo) => ({
        ...todo,
        completed: false,
      }));
      state.filter;
      state.searchTerm;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(
        (todo: Todo, index: number) => index !== action.payload
      );
      state.filter;
      state.searchTerm;
    },
    deleteAllTodo: (state) => {
      state.todos = [];
      state.filter;
      state.searchTerm;
    },
    filterTodo: (state, action: PayloadAction<string>) => {
      state.todos;
      state.filter = action.payload;
      state.searchTerm;
    },
    updateSearchTodo: (state, action: PayloadAction<string>) => {
      state.todos;
      state.filter;
      state.searchTerm = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  setComplete,
  setAllComplete,
  setAllInComplete,
  setInComplete,
  deleteAllTodo,
  filterTodo,
  deleteTodo,
  updateSearchTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
