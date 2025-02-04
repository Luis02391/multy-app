import React from 'react';
import {Text, View} from 'react-native';
import styles from "../styles/HomePageStyle";
import HomePageScreen from "../screens/HomePageScreen";

const HomePage: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenido a la Página de Inicio</Text>
            <HomePageScreen/>
        </View>
    );
}

export default HomePage;


