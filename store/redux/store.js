import {configureStore} from '@reduxjs/toolkit'
import favouriteSliceReducer from './favourites.js'

export const store = configureStore({
    reducer: {
        favouriteMeals: favouriteSliceReducer
    }
})