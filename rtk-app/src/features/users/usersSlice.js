// core stuff here
/* 
  1. initial state of this feature which will find its place in store
  2. reducer functions 
  3. actions associated with reducer fns
*/

import axios from "axios"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
  isLoading: false,
  isError: false,
  userList: [],
  user: {},
  status: 'idle'
}

//  rest api call to fetch Users thru axios 
export const fetchUsersAsync = createAsyncThunk(
  "users/fetchUsers", // action type prefix 
  async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    // The value we return becomes the action payload
    // console.log(response.data);
    return response.data;
  }
)

// Let's create slice
// What's a slice? 
/*
  A function that accepts an initial state,  [DONE]
  an object full of reducer functions, 
  and a "slice name", [DONE]
  and automatically generates action creators and action types 
  that correspond to the reducers and state.
*/
export const usersSlice = createSlice({
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
  },
  // extraReducers: A callback that receives a builder object to 
  // define case reducers 
  // via calls to builder.addCase(actionCreatorOrType, reducer).
  // The extrareducers field lets the slice handle actions defined elsewhere
  // including actions dispatched from other slices
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        // before the promise call either fullfilled/rejected
        // update store
        state.isLoading = true;
        state.isError = false;
        state.status = "loading";
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        // console.log(state);
        // after the promise is fullfilled
        // update store
        state.isLoading = false;
        state.isError = false;
        state.status = "idle";
        state.userList = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state) => {
        // console.log(state);
        // after the promise is rejected
        // update store
        state.isLoading = false;
        state.isError = true;
        state.status = "Some Error Occurred. Try again later";
      });
  }
});

export default usersSlice.reducer;