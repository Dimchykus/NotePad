import {
    StyleSheet,
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    main: {
        backgroundColor: '#989C63',
        paddingHorizontal: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        height: 58,
        flex: 1,
        justifyContent: 'center'
    },
    name:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'left',
        fontSize: 24
    },
    swipe_button: {
        backgroundColor: 'red'
    }
});
