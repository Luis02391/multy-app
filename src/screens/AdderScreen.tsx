import React from 'react';
import {Text, TextInput, View} from 'react-native';
import { Button } from '@rneui/themed';
import styles from "../styles/AdderStyle";
import useSum from "../hooks/UseSum";

const AdderScreen: React.FC = () => {
    const {num1, setNum1, num2, setNum2, sum, handleSum} = useSum();

    return (
        <>
            {sum !== null && <Text style={styles.result}>Resultado: {sum}</Text>}

            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Número 1"
                    value={num1}
                    onChangeText={setNum1}
                />

                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Número 2"
                    value={num2}
                    onChangeText={setNum2}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Sumar" onPress={handleSum}/>
            </View>
        </>
    );
}

export default AdderScreen;
