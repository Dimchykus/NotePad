import React from 'react';

import { View, Text, TextInput  } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentNote, setBoth, setText } from '../../slices/current_note';

const Note = () => {
    const {id, name, text} = useSelector(selectCurrentNote);
    const dispatch = useDispatch();
    return (
        <View>
            <TextInput value={name} onChangeText={(value) => dispatch(setBoth({ id, name: value, text}))}></TextInput>
            <TextInput value={text} onChangeText={(value) => dispatch(setBoth({id, name, text:value}))}></TextInput>
        </View>
    );
};

export default Note;