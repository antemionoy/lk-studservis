import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    title: ''
}

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setPopup: (state, action) => {
            state.id = action.payload.id
            state.title = action.payload.title
        },
        deletePopup:(state, action) =>{
            state.id = null
            state.title = ''
        }

    }
})

export const { setPopup, deletePopup } = popupSlice.actions
export default popupSlice.reducer