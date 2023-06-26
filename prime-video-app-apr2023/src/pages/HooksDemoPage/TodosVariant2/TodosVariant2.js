import React, { useEffect, useReducer, useRef } from 'react';
import todoReducer from '../../../reducers/todoReducer';
import axios from 'axios';

const TodosVariant2 = () => {
  const todoInput = useRef('');

  const [todoState, todoDispatch] = useReducer(todoReducer);
  console.log(todoState); // undefined. you can get the state data from reducer here
  // console.log(todoDispatch); // dispatcher fn  from react core

  useEffect(() => {
    // will be called after initial rendering
    // ideal place for us to send REST API calls
    /*
      1. What's the REST API URL/ Endpoint? https://jsonplaceholder.typicode.com/todos?_limit=3
      2. What's the Http Method? GET
      3. What's the REST API Client / Http Client Tool? axios
    */
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then((res) => { // if successful
        console.log(res.data);
        todoDispatch({
          type: 'LIST_TODOS',
          payload: res.data
        });
      })
      .catch((err) => { // if error
        console.log(err);
      })
      .finally(() => {
        console.log('It is over!');
      });
  }, []);

  const handleAddTodo = () => {
    // console.log(todoInput.current.value);
    todoDispatch({
      type: 'ADD_TODO',
      payload: {
        id: Math.floor(Math.random() * 100000),
        title: todoInput.current.value,
        completed: false
      }
    });
  };

  return (
    <div style={{ backgroundColor: '#B2EBF2', padding: '20px' }}>
      <h3>Todos App with useReducer and useRef</h3>

      <div className="row">
        <div className="col-md-4">
          {/* Uncontrolled Component = form data is handled by the DOM itself. */}
          <input
            type="text"
            className="form-control"
            placeholder="What do you want to do today?"
            ref={todoInput}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-success" onClick={handleAddTodo}>
            ADD TODO
          </button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6">
          {/* TODO: display a msg -- 'No Todos Found. You can add one' if todoState is empty or undefined */}
          <div className="card">
            <ul className="list-group list-group-flush">
              {todoState?.map((todo) => {
                return (
                  <li key={todo.id} className="list-group-item">
                    {todo.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosVariant2;
