import { configureStore } from '@reduxjs/toolkit'
import RecipeReducer from './Reducers/RecipeReducer'

export const store = configureStore({
  reducer: {RecipeReducer},
})