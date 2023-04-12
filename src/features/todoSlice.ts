import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Todo from "../models/todos";

// State Store
const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Reducer add todo
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },

    // Reducer delete todo
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo: Todo) => todo.id !== action.payload);
    },

    toggleTodo: (state, action: PayloadAction<number>) => {
      return state.map((todo: Todo) => {
        return todo.id === action.payload
          ? {
              ...todo,
              is_done: !todo.is_done,
            }
          : todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
