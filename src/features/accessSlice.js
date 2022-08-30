import { createSlice } from '@reduxjs/toolkit'
import { users } from '../data/users';
// import ServerInterface from '../data/ServerInterface';

// the state
const initialState = {
  loggedIn: true,
  activeUser: null,
  users: null,
  favorites: [],

}

export const accessSlice = createSlice({
  name: 'access',
  initialState,
  reducers: {

    login: (state, action) => {
      console.log(" login triggered");
      // console.log(users);
      // const db = ServerInterface
      // console.log(db);
      // iterate users and check
      // const users = 
      // users.some((user) =>
      // { 
      //   if (action.payload.user === user.name && action.payload.password === user.password)
      //   { // set login status, grab user name
      //     state.loggedIn = true;
      //     state.activeUser = user.name
      //     console.log(state.activeUser);
      //   }
      // })
    },

    logout: (state) => {
      // post req to expressjs - add!
      state.loggedIn = false;
      state.user = null;

    },

    // fetchData: (state, action) => {
    //     fetch("http://localhost:8080/db")
    //     .then(response => response.json())
    //     .then(data => state.push(data))
    //     .catch(error => console.error(error))
    //     console.log(state.users);
    // }

    addFavorite: (state, action) => {
      console.log("favroited");
      console.log("payload:" + action.payload);
      console.log("state:"+ Object.keys(state));
      if (action.payload !== undefined) { 
        state.favorites = [...state.favorites, action.payload]
      }
      console.log(state.favorites[state.favorites.length -1]);
     
    }
  },

})

// Action creators are generated for each case reducer function
export const { login, logout, fetchData, addFavorite } = accessSlice.actions

export default accessSlice.reducer