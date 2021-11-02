import { configureStore } from '@reduxjs/toolkit';
import noteReducer from '../slices/notes';
import currentNote from '../slices/current_note';

export const store = configureStore({
    reducer: {
        notesList: noteReducer,
        currentNote: currentNote
    },
})
