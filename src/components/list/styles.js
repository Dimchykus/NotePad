import {
    StyleSheet,
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    main: {
        backgroundColor: '#989C63',
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 5
    },
    name:{
        fontWeight: 'bold',
        fontSize: 18
    }
});
