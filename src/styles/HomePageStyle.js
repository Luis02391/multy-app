import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    photo: {
        width: 280,
        height: 280,
        borderRadius: 140,
        marginBottom: 20,
        borderWidth: 4,
        borderColor: '#4A90E2',
    },
    text: {
        fontSize: 34,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    subText: {
        fontSize: 22,
        fontFamily: 'Roboto',
        color: '#666',
        textAlign: 'center',
    },
});

export default styles;
