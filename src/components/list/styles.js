import {
    StyleSheet,
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    main: {
        backgroundColor: '#989C63',
        marginHorizontal: 15,
        marginVertical: 8,
        padding: 5,
        borderRadius: 5
    },
    name:{
        fontWeight: 'bold',
        fontSize: 18
    }
});
