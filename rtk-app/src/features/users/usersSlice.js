// core stuff here
/* 
  1. initial state of this feature which will find its place in store
  2. reducer functions 
  3. actions associated with reducer fns
*/

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  isLoading: false,
  isError: false,
  userList: [],
  user: {},
  status: 'idle'
}

// Let's create slice
// What's a slice? 
/*
  A function that accepts an initial state,  [DONE]
  an object full of reducer functions, 
  and a "slice name", [DONE]
  and automatically generates action creators and action types 
  that correspond to the reducers and state.
*/
const usersSlice = createSlice({
  name: "users",
  initialState,
  // Let's have the obj full of reducer functions
  reducers: {
    addUser: (state) => { // state is data from store of this feature
      debugger;
    },
    fetchUsers: (state) => {
      debugger;
    }
  }
});
