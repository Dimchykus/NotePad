import {
    StyleSheet,
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    main: {
        marginHorizontal: 15
    },
    name:{
        fontSize: 23,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        width: windowWidth,
        paddingRight: 20
    },
})
