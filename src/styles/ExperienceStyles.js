import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 20,
        paddingTop: 150,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#4A90E2",
        marginBottom: 20,
        textAlign: "center",
    },
    videoContainer: {
        width: "100%",
        height: 250,
        borderRadius: 10,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#000",
    },
});

export default styles;
