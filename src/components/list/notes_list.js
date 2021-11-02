import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { selectNotes } from '../../slices/notes';
import s from './styles';

const NoteCell = ({ name, text}) => (
    <TouchableOpacity style={s.main} >
        <Text style={s.name}>{name}</Text>
    </TouchableOpacity>
)

const NotesList = () => {
    const { notes } = useSelector(selectNotes);
    const noteList = notes.map((n, key) => <NoteCell name={n.name} text={n.text} key={key}/>)
    return (
        <View>
            {noteList}
        </View>
    );
};

export default NotesList;