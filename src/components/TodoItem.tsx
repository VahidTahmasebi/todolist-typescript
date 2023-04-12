import { useState } from "react";
import EditTodo from "./EditTodo";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { deleteTodo, toggleTodo } from "../features/todoSlice";
import Todo from "../models/todos";

interface IProps {
  todo: Todo;
}

const TodoItem: React.FC<IProps> = ({ todo }) => {
  const [editStatus, setEditStatus] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const deleteHandler = () => {
    dispatch(deleteTodo(todo.id));
  };

  const toggleHandler = () => {
    dispatch(toggleTodo(todo.id));
  };

  return !editStatus ? (
    <div className='col-6 mb-2'>
      <div className='d-flex justify-content-between align-items-center border rounded p-3'>
        <div
          onClick={toggleHandler}
          style={{ textDecoration: todo.is_done ? "line-thorough" : "none" }}>
          {todo.title}
        </div>
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
