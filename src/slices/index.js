import { configureStore } from "@reduxjs/toolkit";
import popupReducer from './popupSlice'
import userReduscer from './userSlice'

export const store =  configureStore({
    reducer: {
        user: userReduscer,
        popup: popupReducer
    }
})