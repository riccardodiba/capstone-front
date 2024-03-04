import { combineReducers, configureStore } from '@reduxjs/toolkit'
import registerReducer from '../reducers/login'
import animaleReducer from '../reducers/animale'



const bigReducer = combineReducers({
   register:  registerReducer,
   animale : animaleReducer
})

const store = configureStore({
  reducer: bigReducer,
})

export default store