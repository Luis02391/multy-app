import React from 'react';
import {Text, View} from "react-native";
import AdderScreen from "../screens/AdderScreen";
import styles from "../styles/AdderStyle";

const Adder: React.FC = () => {
    return (
        <View>
            <Text style={styles.result}>Sumadora</Text>
            <AdderScreen/>
        </View>
    );
}

export default Adder;