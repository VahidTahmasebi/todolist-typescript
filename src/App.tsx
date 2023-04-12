import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import Todo from "./models/todos";

enum FilterTypes {
  Undone = "undone",
  Done = "done",
}

function App() {
  const todos = useSelector((state: RootState) => state.todo);

  const [filter, setFilter] = useState<FilterTypes>(FilterTypes.Undone);

  const filteredTodos = todos.filter((todo: Todo) => {
    if (filter === FilterTypes.Done) {
      return todo.is_done;
    } else {
      return !todo.is_done;
    }
  });

  return (
    <div>
      <header>
        <div className='navbar navbar-dark bg-dark shadow-sm'>
          <div className='container d-flex justify-content-between'>
            <a href='#' className='navbar-brand d-flex align-items-center'>
              <strong>Todo App</strong>
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className='jumbotron'>
          <div className='container d-flex flex-column align-items-center'>
            <h1 className='jumbotron-heading'>Welcome!</h1>
            <p className='lead text-muted'>
              To get started, add some items to your list:
            </p>
            <AddTodo />
          </div>
        </section>
        <div className='todosList'>
          <div className='container'>
            <div className='d-flex flex-column align-items-center'>
              <nav className='col-6 mb-3'>
                <div id='nav-tab' role='tablist' className='nav nav-tabs'>
                  <a
                    id='nav-home-tab'
                    onClick={(e) => setFilter(FilterTypes.Undone)}
                    className={`nav-item nav-link font-weight-bold`}>
                    Undone
                    <span className='badge badge-secondary'>9</span>
                  </a>
                  <a
                    id='nav-home-tab'
                    onClick={(e) => setFilter(FilterTypes.Done)}
                    className={`nav-item nav-link font-weight-bold`}>
                    Done
                    <span className='badge badge-success'>9</span>
                  </a>
                </div>
              </nav>
              {filteredTodos.map((todo: Todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
