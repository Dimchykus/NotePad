import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    notes: [
        {
            name: "name1",
            text: "text sds sdf sd s s "
        },
        {
            name: "name1",
            text: "text sds sdf sd s s "
        },
        {
            name: "name1",
            text: "text sds sdf sd s s "
        }
    ]
}

export const Notes = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = Notes.actions

export const selectNotes = (state) => state.notesList;

export default Notes.reducer