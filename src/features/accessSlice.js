import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
// import { client } from '../../api/client'

// the state
const initialState = {
  users: [{"name": "stateUser"}],
  loggedIn: false,
  activeUser: {
    name: null,
    favorites: [],
  },
   // array of brewery ids,
  brewery: [{
    id: null,
    rating: [],
    review: []
  }]
  
}

export const accessSlice = createSlice({
  name: 'access',
  initialState,
  reducers: {

    login: (state, action) => {
      state.loggedIn = action.payload[0]
      state.activeUser.name = action.payload[1]
      console.log(action.payload);
    },

    logout: (state, action) => {
      // post req to expressjs - add!
      state.loggedIn = false;
      state.activeUser.name = null;
    },

    // add to active user
    addFavorite: (state, action) => {
      const { id } = action.payload
      // check if user already favoritor
      const exisitingBrewery = state.activeUser.favorites.find(brewery_id => brewery_id === id)
      if (exisitingBrewery) {
        console.log("existing already");
      }
      else {
        state.activeUser.favorites.push(action.payload)
      }

    },

    addReview: (state, action) => {

      const {id, review, rating } = action.payload
      const exisitingBrewery = state.brewery.find(brewery => brewery.id === id)

      if (exisitingBrewery) {
        console.log("existing already");
        exisitingBrewery.review.push(review.toString());
        exisitingBrewery.rating.push(Number(rating));
      }
      else {
        state.brewery.push(action.payload)
      }

    }
  },

})

// Action creators are generated for each case reducer function
export const { login, logout, addFavorite, addReview, usersLoading, usersReceived } = accessSlice.actions

export default accessSlice.reducer