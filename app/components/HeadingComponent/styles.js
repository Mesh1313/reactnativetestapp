import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    heading: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 5,
        alignSelf: 'stretch'
    },
    headingText: {
        textAlign: 'center',
        fontSize: 24
    },
    barsIcon: {
        position: 'absolute',
        left: 8,
        top: 8,
        zIndex: 2
    }
});

export default styles;