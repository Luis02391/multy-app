import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F4F6F9",
        paddingHorizontal: 20,
        paddingTop: 80,
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
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    buttonContainer: {
        alignItems: "center",
        width: "auto",
        BackgroundColor: "#032943",
        borderRadius: 10,
        overflow: "hidden",
        marginTop: 60,
    },
    result: {
        marginTop: 20,
        fontSize: 22,
        fontWeight: "bold",
        color: "#4A90E2",
        textAlign: "center",
    },
});

export default styles;
