import React from 'react';

import { SafeAreaView, View, Text, Button } from 'react-native';
import NotesList from '../list/notes_list';
import s from './styles';
import Note from '../note/note';

const Main = () => {
    return (
        <SafeAreaView style={s.main}>
            <NotesList/>
        </SafeAreaView>
    );
};

export default Main;