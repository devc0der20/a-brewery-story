import { createSlice } from '@reduxjs/toolkit'
// import { users } from '../data/users';
import ServerInterface from '../data/ServerInterface'

// the state
const initialState = {

  users: [{"name": "stateUser"}],
  loggedIn: true,
  activeUser: {
    name: "test_dummy",
    favorites: [],
  },
   // array of brewery ids,
  brewery: [{
    id: null,
    rating: [],
    review: []
  }]
  
}

const usersDB = {}

export const accessSlice = createSlice({
  name: 'access',
  initialState,
  reducers: {

    login: (state, action) => {
      console.log(" login triggered");
      // iterate users and check
      console.log(action.payload);
      console.log(state.users);
      console.log(ServerInterface);
      // console.log(ServerInterface(callback({})));

      fetch(`http://localhost:8080/db?user=${action.payload.user}&password=${action.payload.password}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        }
        )
        .catch(error => console.error(error))

    // dispatch(fetchData())
      // action.payload.some((user) =>
      // { 
      //   if (action.payload.user === user.name && action.payload.password === user.password)
      //   { // set login status, grab user name
      //     state.loggedIn = true;
      //     state.activeUser = user.name
      //     console.log(state.activeUser);
      //   }
      // })
    },

    logout: (state, action) => {
      // post req to expressjs - add!
      state.loggedIn = false;
      state.activeUser.name = null;
    },

    // fetchData: (state, action) => {
    //     fetch("http://localhost:8080/db")
    //     .then(response => response.json())
    //     .then(data => state.push(data))
    //     .catch(error => console.error(error))
    //     console.log(state.users);
    // }
    // add to active user
    addFavorite: (state, action) => {
      console.log("favroited");
      console.log("payload:" + action.payload);
      console.log("state:"+ Object.keys(state));
      if (action.payload !== undefined && !state.activeUser.favorites.includes(action.payload)) { 
        // state.activeUser.favorites = [...state.activeUser.favorites, action.payload]
        state.activeUser.favorites.push(action.payload)
        console.log(state.activeUser.favorites.length);
        console.log(state.activeUser.favorites);
        console.log(state.activeUser.favorites[state.activeUser.favorites.length -1]);
      } else { console.log("already favorited");}
    },

    addReview: (state, action) => {
      console.log("triggered");
      console.log(action.payload);
     
      const checkBrewery = state.brewery.find(brewery => brewery.id === action.payload.id)

      if (checkBrewery) {
        console.log(state.brewery.rating);
        state.brewery = { ...state.brewery, rating: [...state.brewery.rating, 509]}
        console.log(state.brewery.rating);
       
        // console.log("adding to array");
        // checkBrewery.review.push(action.payload.review)
        // checkBrewery.review.push(action.payload.rating)
        // console.log(state.brewery.length);
      } else {
        state.brewery = {...state.brewery, ...action.payload}
        console.log(state.brewery);
      }

      // console.log(data.length);
      // state.brewery.push(action.payload)
      // const found = state.brewery.find( ({item}) => item === action.payload.brewery_id )
      // console.log(state.brewery[0].reviews);
      // console.log(found);

      // workign properly both
      // console.log(state.brewery[state.brewery.length -1].text);
      // console.log(state.brewery.length);

    }
  },

})

// Action creators are generated for each case reducer function
export const { login, logout, addFavorite, addReview } = accessSlice.actions

export default accessSlice.reducer