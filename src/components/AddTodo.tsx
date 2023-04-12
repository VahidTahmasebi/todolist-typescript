import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { addTodo } from "../features/todoSlice";

const AddTodo: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (input !== "") {
      dispatch(
        addTodo({
          id: Date.now(),
          title: input,
          is_done: false,
        }),
      );
      setInput("");
    }
  };

  return (
    <form onSubmit={submitHandler} className='form-inline mb-4'>
      <div className='form-group d-flex'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='I want to do...'
        />
        <button type='submit' className='btn btn-primary'>
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
