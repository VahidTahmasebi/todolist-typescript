import React, { Dispatch, SetStateAction, useState } from "react";
import Todo from "../models/todos";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { editTodo } from "../features/todoSlice";

interface Props {
  todo: Todo;
  setEditStatus: Dispatch<SetStateAction<boolean>>;
}

const EditTodo: React.FC<Props> = ({ todo, setEditStatus }) => {
  const [inputValue, setInputValue] = useState<string>(todo.title);

  const dispatch = useDispatch<AppDispatch>();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue !== "") {
      dispatch(editTodo({ id: todo.id, text: inputValue }));
      setInputValue("");
      setEditStatus(false);
    }
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
