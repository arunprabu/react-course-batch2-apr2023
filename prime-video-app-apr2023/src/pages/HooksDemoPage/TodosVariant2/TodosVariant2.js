import React from 'react'

const TodosVariant2 = () => {
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
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-success">ADD TODO</button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6">
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">first todo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodosVariant2;
