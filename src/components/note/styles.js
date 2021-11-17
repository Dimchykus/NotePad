import {
    StyleSheet,
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    main: {
        flex: 1
    },
    name:{
        fontSize: 23,
        fontWeight: 'bold',
        padding: 0,
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',

        padding: 0,
        marginHorizontal: 15
    },
})
