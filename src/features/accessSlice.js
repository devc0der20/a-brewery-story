import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
// import { client } from '../../api/client'

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

// const { user , password } = action.payload
// url = `http://localhost:8080/db?user=${user}&password=${password}`
// export const checkCreds = createAsyncThunk('access/checkCreds', async () => {
//   const response = await client.get(url)
//   return response.data
// })

export const accessSlice = createSlice({
  name: 'access',
  initialState,
  reducers: {
    
    login: (state, action) => {
      console.log(" login triggered");
      // iterate users and check
      console.log(action.payload);
      console.log(state.users);

      // console.log(ServerInterface(callback({})));
      const processData = (data) => {
          console.log("my callback is " + data);
        if (data) { state.loggedIn = true}
      }
      fetch(`http://localhost:8080/db?user=${action.payload.user}&password=${action.payload.password}`)
        .then(response => response.json())
        .then(data => processData(data.result) )
        .catch(error => console.error(error))
      
      // async function fetchUsers() {
      //   let response = await fetch(`http://localhost:8080/db?user=${action.payload.user}&password=${action.payload.password}`);
      //   let data = await response.json();
      //   console.log(data);
      // }
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

      // console.log("favroited");
      // console.log("payload:" + action.payload);
      // console.log("state:"+ Object.keys(state));
      // if (action.payload !== undefined && !state.activeUser.favorites.includes(action.payload)) { 
      //   // state.activeUser.favorites = [...state.activeUser.favorites, action.payload]
      //   state.activeUser.favorites.push(action.payload)
      //   console.log(state.activeUser.favorites.length);
      //   console.log(state.activeUser.favorites);
      //   console.log(state.activeUser.favorites[state.activeUser.favorites.length -1]);
      // } else { console.log("already favorited");}
    },

    addReview: (state, action) => {

      const {id, review, rating } = action.payload
      const exisitingBrewery = state.brewery.find(brewery => brewery.id === id)

      if (exisitingBrewery) {
        console.log("existing already");
        exisitingBrewery.review.push(review);
        exisitingBrewery.rating.push(rating);
      }
      else {
        state.brewery.push(action.payload)
      }

    }
  },

})

// Action creators are generated for each case reducer function
export const { login, logout, addFavorite, addReview } = accessSlice.actions

export default accessSlice.reducer