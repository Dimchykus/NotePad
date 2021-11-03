import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    id: null,
    name: "",
    text: ""
}

export const CurrentNote = createSlice({
    name: 'note',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setText: (state, action) => {
            state.text = action.payload;
        },
        setId: (state, action) => {
            state.text = action.payload;
        },
        setBoth: (state, action) => {
            state.name = action.payload.name;
            state.text = action.payload.text;
            state.id = action.payload.id;
        },
    },
    extraReducers: (builder) => {

    },
})

export const { setName, setText, setBoth } = CurrentNote.actions

export const selectCurrentNote = (state) => state.currentNote;

export default CurrentNote.reducer