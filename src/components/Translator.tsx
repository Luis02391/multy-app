import React from 'react';
import {Text, View} from "react-native";
import NumberTranslatorScreen from "../screens/NumberTranslatorScreen";
import styles from "../styles/AdderStyle";

const Translator: React.FC = () => {
    return (
        <View>
            <Text style={styles.result}>Traductor de Números a Letras</Text>
            <NumberTranslatorScreen/>
        </View>
    );
}

export default Translator;