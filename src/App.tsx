import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import AddTodo from "./components/AddTodo";

function App() {
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
            <AddTodo/>
          </div>
        </section>
        <div className='todosList'>
          <div className='container'>
            <div className='d-flex flex-column align-items-center'>
              <nav className='col-6 mb-3'>
                <div id='nav-tab' role='tablist' className='nav nav-tabs'>
                  <a
                    href=''
                    id='nav-home-tab'
                    className={`nav-item nav-link font-weight-bold`}>
                    undone
                    <span className='badge badge-secondary'>9</span>
                  </a>
                  <a
                    href=''
                    id='nav-home-tab'
                    className={`nav-item nav-link font-weight-bold`}>
                    done
                    <span className='badge badge-success'>9</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
