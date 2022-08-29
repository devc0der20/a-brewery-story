import { configureStore } from '@reduxjs/toolkit'
import accessReducer from './features/accessSlice'
// import usersDB from './data/users.json'

export const store = configureStore({ 
  reducer: { 
    access: accessReducer, 
  },
})


