import { StyleSheet } from 'react-native';
import sharedStyles from '../../config/styles';

const styles = StyleSheet.create({
    container: Object.assign({}, sharedStyles.container, { justifyContent: 'center' }),
    title: sharedStyles.title,
    icons: {
        fontSize: 20,
        marginRight: 10,
        textAlign: 'left',
        color: 'black'
    },
    textInput: {
        borderColor: 'gray',
        borderWidth: 1,
        width: 150,
        marginBottom: 20,
        padding: 0,
        paddingHorizontal: 10
    },
    inputHolder: {
        flexWrap: 'wrap',
        alignItems: 'stretch',
        flexDirection: 'row'
    },
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