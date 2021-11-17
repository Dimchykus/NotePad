import {
    StyleSheet,
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    main: {
        backgroundColor: '#B6CB8A',
    },
    image:{
        height: windowWidth * 0.08,
        width: windowWidth * 0.08
    },
    new_button:{
        
    }
});
