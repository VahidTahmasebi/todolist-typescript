import { useState } from "react";
import EditTodo from "./EditTodo";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { deleteTodo } from "../features/todoSlice";

const TodoItem = ({ todo }) => {
  const [editStatus, setEditStatus] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const deleteHandler = () => {
    dispatch(deleteTodo(todo.id));
  };

  return !editStatus ? (
    <div className='col-6 mb-2'>
      <div className='d-flex justify-content-between align-items-center border rounded p-3'>
        <div>todo</div>
        <div>
          <button
            type='button'
            onClick={() => setEditStatus(true)}
            className='btn btn-info btn-sm'>
            Edit
          </button>
          <button
            type='button'
            onClick={deleteHandler}
            className='btn btn-danger btn-sm ml-1'>
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : (
    <EditTodo />
  );
};

export default TodoItem;
