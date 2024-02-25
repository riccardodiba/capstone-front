import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducers from '../reducers/user'
import registerReducer from '../reducers/login'
import animaleReducer from '../reducers/animale'



const bigReducer = combineReducers({
  user: userReducers,
   register:  registerReducer,
   animale : animaleReducer

  
})

const store = configureStore({
  reducer: bigReducer,
})

export default store