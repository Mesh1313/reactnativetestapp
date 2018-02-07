import { StyleSheet } from 'react-native';
import sharedStyles from '../../config/styles';

const styles = StyleSheet.create({
    container: sharedStyles.container,
    title: sharedStyles.title,
    loginBtn: {
        paddingVertical: 10,
        backgroundColor: '#EEE',
        width: 100
    },
    btnText: {
        fontSize: 18,
        textAlign: 'center'
    }
});

export default styles;