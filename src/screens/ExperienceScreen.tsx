import React from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";
import styles from "../styles/ExperienceStyles";

const ExperienceScreen: React.FC = () => {
    return (
        <>
            <Text style={styles.title}>Mi Experiencia con el Proyecto</Text>

            <View style={styles.container}>
                <View style={styles.videoContainer}>
                    <WebView
                        source={{ uri: "https://www.youtube.com/embed/9ximrK9gyh4" }}
                        allowsFullscreenVideo
                    />
                </View>
            </View>

        </>
    );
};

export default ExperienceScreen;
