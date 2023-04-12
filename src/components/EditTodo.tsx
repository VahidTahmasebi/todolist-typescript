import e from "express";
import { useState } from "react";

const EditTodo = () => {
  const [inputValue, setInputValue] = useState<string>();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitChange = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitChange} className='col-6 mb-2'>
      <div className='d-flex justify-content-between align-items-center border rounded p-3'>
        <div>
          <input type='text' value={inputValue} onChange={inputHandler} />
        </div>
        <div>
          <button type='submit' className='btn btn-info btn-sm'>
            Edit
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditTodo;
