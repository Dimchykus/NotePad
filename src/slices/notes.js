import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AsyncStorage } from 'react-native';

const initialState = {
    notes: [ 

    ]
}
       
        // {
        //     id: 2,
        //     name: "name1",
        //     text: "text sds sdf sd s s "
        // },
        // {
        //     id: 3,
        //     name: "name1",
        //     text: "text sds sdf sd s s "
        // }
const updateStorage = (notes) => {
    console.log(notes);
    AsyncStorage.setItem(
        'notes',
        JSON.stringify(notes),
        () => {
            // AsyncStorage.getItem('notes', (err, result) => {
            //     console.log(result);
            // });
        }
    );
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
            updateStorage(state.notes);
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter(n => n.id != action.payload.id)
            updateStorage(state.notes);
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
            updateStorage(state.notes);
        },
    },
    extraReducers: (builder) => {
        builder.addCase('note/setBoth', (state, { payload }) => {
            const note = state.notes.find(n => n.id == payload.id);
            note.name = payload.name;
            note.text = payload.text;
            updateStorage(state.notes);
        });
    },
})

export const { newNote, deleteNote, setNotes } = Notes.actions

export const selectNotes = (state) => state.notesList;

export default Notes.reducer