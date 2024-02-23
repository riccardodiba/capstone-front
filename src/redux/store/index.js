import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducers from '../reducers/user'
import registerReducer from '../reducers/login'



const bigReducer = combineReducers({
  user: userReducers,
   register:  registerReducer
  
})

const store = configureStore({
  reducer: bigReducer,
})

export default store