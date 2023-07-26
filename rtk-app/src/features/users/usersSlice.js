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
    return response.data; // this will be payload of action obj
  }
)

// rest api call to add user thru axios 
export const addUserAsync = createAsyncThunk(
  "users/addUser",
  async (addUserForm) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users", addUserForm
    );
    // console.log(response.data);
    return response.data;
  }
);

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
    // if you want to update store locally without connecting to rest api 
    // write the logic here - this is meant for sync calls
  },
  // extraReducers: A callback that receives a builder object to 
  // define case reducers 
  // via calls to builder.addCase(actionCreatorOrType, reducer).
  // The extrareducers field lets the slice handle actions defined elsewhere
  // including actions dispatched from other slices
  extraReducers: (builder) => {
    // if you want to update the store by connecting to rest api
    // write logic here - this is meant for async calls
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        // console.log(state); // state is store data for this feature
        // Let's update store from here
        state.isLoading = true;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userList = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.status = "Unable to fetch users. Please try after sometime!";
      })
      .addCase(addUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userList = [...state.userList, action.payload];
      })
      .addCase(addUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.status = 'Unable to Add';
      });
  }
});

export default usersSlice.reducer;