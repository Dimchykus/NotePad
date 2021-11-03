import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    notes: [
        {
            id: 1,
            name: "name1",
            text: "text sds sdf sd s s "
        },
        {
            id: 2,
            name: "name1",
            text: "text sds sdf sd s s "
        },
        {
            id: 3,
            name: "name1",
            text: "text sds sdf sd s s "
        }
    ]
}

export const Notes = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        newNote: (state, action) => {
            state.notes.push({
                id: action.payload.id,
                name: "Title",
                text: "Text"
            })
        },
    },
    extraReducers: (builder) => {
        builder.addCase('note/setBoth', (state, { payload }) => {
            const note = state.notes.find(n => n.id == payload.id);
            note.name = payload.name;
            note.text = payload.text;
        });
    },
})

export const { newNote } = Notes.actions

export const selectNotes = (state) => state.notesList;

export default Notes.reducer