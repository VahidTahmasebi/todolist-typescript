import { createSlice } from "@reduxjs/toolkit";
import Todo from "../models/todos";

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});
export const {} = todoSlice.actions;
export default todoSlice.reducer;
