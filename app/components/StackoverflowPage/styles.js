import { StyleSheet } from 'react-native';
import sharedStyles from '../../config/styles';

const styles = StyleSheet.create({
    container: sharedStyles.container,
    title: sharedStyles.title,
    loadingText: {
        fontSize: 30,
        paddingTop: 50,
        color: '#000'
    }
});

export default styles;