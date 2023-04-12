import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Todo from "../models/todos";

const initialState: Todo[] = [];
console.log(initialState);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      console.log(state);
      console.log(action.payload);

      state.push(action.payload);
    },
  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
