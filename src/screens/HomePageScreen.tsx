import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from "../styles/HomePageStyle";

const HomePageScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            {/* Foto de perfil */}
            <Image
                source={require('../assets/fotoHome.png')}
                style={styles.photo}
            />
            {/* Full Name */}
            <Text style={styles.text}>Ivo Luis Rodríguez</Text>

            {/* Profession */}
            <Text style={styles.subText}>Software Developer</Text>

            {/* Student ID */}
            <Text style={styles.subText}>2023-1197</Text>

            {/* Email */}
            <Text style={styles.subText}>rodriguezivoluis@gmail.com</Text>
        </View>
    );
}

export default HomePageScreen;
