import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import personReducer from './personSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    person:personReducer
  },
})
