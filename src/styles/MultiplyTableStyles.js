import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F4F6F9",
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
        textTransform: "uppercase",
        letterSpacing: 1,
    },
    input: {
        height: 50,
        width: "85%",
        borderColor: "#4A90E2",
        borderWidth: 2,
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: 18,
        backgroundColor: "#fff",
        color: "#333",
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        elevation: 3,
    },
    scrollView: {
        marginTop: 10,
        width: '100%',
        padding: 10,
    },
    buttonContainer: {
        alignItems: "center",
        width: "auto",
        BackgroundColor: "#032943",
        borderRadius: 10,
        overflow: "hidden",
        marginTop: 30,
    },
    resultContainer: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    result: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#4A90E2',
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
});

export default styles;
