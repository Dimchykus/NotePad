import React from 'react';

import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setBoth } from '../../slices/current_note';
import { deleteNote, selectNotes } from '../../slices/notes';
import s from './styles';
import Swipeout from 'react-native-swipeout';



const NoteCell = ({ name, text, id, navigation }) => {
    const dispatch = useDispatch();
    var swipeoutBtns = [
        {
            text: 'Delete',
            onPress: () => dispatch(deleteNote({ id })),
            backgroundColor: 'red',
            style: s.swipe_button
        }
    ]
    return (
        <Swipeout right={swipeoutBtns} backgroundColor={"#B6CB8A"} close>
            <TouchableOpacity style={s.main} onPress={() => {
                navigation.navigate('Note');
                dispatch(setBoth({ name, text, id }));
            }}>
                <Text style={s.name}>{name}</Text>
            </TouchableOpacity>
        </Swipeout>
    )
}

const NotesList = ({ navigation }) => {
    const { notes } = useSelector(selectNotes);
    const noteList = notes.map((n, key) => <NoteCell name={n.name} text={n.text} id={n.id} key={key} navigation={navigation} />)

    return (
        <ScrollView>
            {noteList}

        </ScrollView>
    );
};

export default NotesList;