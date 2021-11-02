import React from 'react';

import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectCurrentNote } from '../../slices/current_note';

const Note = () => {
    const {name, text} = useSelector(selectCurrentNote);
    return (
        <View>
            <Text>{name}</Text>
            <Text>{text}</Text>
        </View>
    );
};

export default Note;