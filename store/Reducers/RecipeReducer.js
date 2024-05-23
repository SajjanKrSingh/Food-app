import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    recipe: [],
}

export const RecipeReducer = createSlice({
    name: 'crecipe',
    initialState,
    reducers: {
        addRecipe: (state, action) => {
            state.recipe.push(action.payload)
        },
        deleteRecipe: (state, action) => {
            // const recipeindex = recipe.findIndex((r) => r.id == action.payload);
            // state.recipe.splice(recipeindex,1)
            state.recipe = state.recipe.filter((r) => r.id != action.payload)
            
        },
        updateRecipe: (state, action) => {

        },
    },
})

// Action creators are generated for each case reducer function
export const { addRecipe, deleteRecipe, updateRecipe } = RecipeReducer.actions

export default RecipeReducer.reducer