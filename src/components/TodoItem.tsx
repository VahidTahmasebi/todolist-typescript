const TodoItem = () => {
  return (
    <div className='col-6 mb-2'>
      <div className='d-flex justify-content-between align-items-center border rounded p-3'>
        <div>todo</div>
        <div>
          <button type='button' className='btn btn-info btn-sm'>
            Edit
          </button>
          <button type='button' className='btn btn-danger btn-sm ml-1'>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
