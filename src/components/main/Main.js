import React from 'react';

import { SafeAreaView, View, Text, Button } from 'react-native';
import NotesList from '../list/notes_list';
import s from './styles';
import Note from '../note/note';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { newNote, selectNotes } from '../../slices/notes';
import { setBoth } from '../../slices/current_note';

const Stack = createNativeStackNavigator();
//B6CB8A

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#B6CB8A'
    },
};

const Main = ({ navigation }) => {
    const dispatch = useDispatch();
    const { notes } = useSelector(selectNotes);
    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator
                screenOptions={({ route, navigation }) => ({
                    headerShown: true,
                    gestureEnabled: true,

                })}


            >
                <Stack.Screen
                    name="NotesList" component={NotesList}
                    options={({ navigation }) => ({
                        title: 'Notes',
                        headerStyle: {
                            backgroundColor: '#989C63',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRight: () => (
                            <Button
                                onPress={() => {
                                    navigation.navigate('Note');
                                    dispatch(newNote({ id: notes.length + 1}));
                                    dispatch(setBoth({ id: notes.length + 1, name: "Title", text:"Text"}))
                                }}
                                title="New"

                            />
                        ),
                    })}
                />
                <Stack.Screen 
                name="Note" component={Note}
                    options={{
                        title: 'Notes',
                        headerStyle: {
                            backgroundColor: '#989C63',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Main;