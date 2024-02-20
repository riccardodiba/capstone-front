import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducers from '../reducers/user'



const bigReducer = combineReducers({
  
  user: userReducers,
  
})

const store = configureStore({
  reducer: bigReducer,
})

export default store