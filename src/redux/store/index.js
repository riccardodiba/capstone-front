import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducers from '../reducers/user'
import registerReducer from '../reducers/login'
import animaliReducer from '../reducers/animali'



const bigReducer = combineReducers({
  user: userReducers,
   register:  registerReducer,
   animale : animaliReducer

  
})

const store = configureStore({
  reducer: bigReducer,
})

export default store