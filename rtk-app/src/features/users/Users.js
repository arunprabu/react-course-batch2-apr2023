const Users = () => {
  return (
    <div className="row">
      <h1>User Management</h1>
      <div className="col-md-4">
        <h2>Add User</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="nameInput" />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneInput" className="form-label">
              Phone
            </label>
            <input type="text" className="form-control" id="phoneInput" />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="emailInput" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div className="col-md-8">
        <h2>List Users</h2>
        <div className="row">
          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">John</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  E-Mail: j@k.com
                </h6>
                <p class="card-text">Phone: 3245678</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">John</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  E-Mail: j@k.com
                </h6>
                <p class="card-text">Phone: 3245678</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">John</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  E-Mail: j@k.com
                </h6>
                <p class="card-text">Phone: 3245678</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
