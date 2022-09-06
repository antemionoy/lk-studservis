import { configureStore } from "@reduxjs/toolkit";
import popupReducer from './popupSlice'


export default configureStore({
    reducer: {
        user: null,
        popup: popupReducer
    }
})
