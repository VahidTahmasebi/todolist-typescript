import React, { useState } from "react";

const AddTodo: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
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
