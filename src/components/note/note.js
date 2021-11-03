import React from 'react';

import { View, Text, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentNote, setBoth, setText } from '../../slices/current_note';
import s from './styles';



const Note = () => {
    const { id, name, text } = useSelector(selectCurrentNote);
    const dispatch = useDispatch();
    return (
        <View style={s.main}>
            <TextInput
                placeholder={"Name"}
                style={s.name}
                textAlign={"center"}
                value={name}
                onChangeText={(value) => dispatch(setBoth({ id, name: value, text }))}
            ></TextInput>
            <ScrollView>
                <TextInput
                    style={s.text}
                    value={text}
                    multiline
                    onChangeText={(value) => dispatch(setBoth({ id, name, text: value }))}
                ></TextInput>
            </ScrollView>
        </View>
    );
};

export default Note;