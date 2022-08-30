import { createSlice } from '@reduxjs/toolkit'
import { users } from '../data/users';

const initialState = {
  loggedIn: true,
  activeUser: null,
}

export const accessSlice = createSlice({
  name: 'access',
  initialState,
  reducers: {

    login: (state, action) => {
      // iterate users and check
      users.some((user) =>
      { 
        if (action.payload.user === user.name && action.payload.password === user.password)
        { // set login status, grab user name
          state.loggedIn = true;
          state.activeUser = user.name
          console.log(state.activeUser);
        }
      })  
    },

    logout: (state) => {
      state.loggedIn = false;
      state.user = null;
    },

  },

  setRate: () => {

  }
})

// Action creators are generated for each case reducer function
export const { login, logout } = accessSlice.actions

export default accessSlice.reducer