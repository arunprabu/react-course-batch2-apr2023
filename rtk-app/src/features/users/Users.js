import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAsync } from "./usersSlice";
import AddUser from "./AddUser/AddUser";

const Users = () => {
  // use useSelector to subscribe to the store data
  const usersState = useSelector((state) => {
    // state is the store data
    // console.log(state);
    // I need users property only from store obj.
    return state.users;
  });

  console.log(usersState);

  const dispatch = useDispatch();
  console.log(dispatch);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, []);

  if (usersState.isLoading) {
    return <div className="spinner-border"></div>;
  }

  if (usersState.isError) {
    return <div className="alert alert-danger">{usersState.status}</div>;
  }

  return (
    <div className="row">
      <h1>User Management</h1>
      <div className="col-md-4">
        <AddUser />
      </div>

      <div className="col-md-8">
        <h2>List Users</h2>
        <div className="row">
          {usersState.userList?.map((user) => {
            return (
              <div className="col-md-4" key={user.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      E-Mail: {user.email}
                    </h6>
                    <p className="card-text">Phone: {user.phone}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
