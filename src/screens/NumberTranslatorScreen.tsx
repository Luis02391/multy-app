import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from "../styles/NumberTranslatorStyle";
import UseNumbersToLetters from "../hooks/UseNumbersToLetters";
import {Button} from "@rneui/themed";


const Translator: React.FC = () => {
    const [num, setNum] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const handleTranslate = () => {
        const number = parseInt(num, 10);
        if (!isNaN(number) && number >= 1 && number <= 1000) {
            setResult(UseNumbersToLetters(number));
        } else {
            setResult("Por favor ingresa un número entre 1 y 1000");
        }
    };

    return (
        <>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa un número (1-1000)"
                    keyboardType="numeric"
                    value={num}
                    onChangeText={setNum}
                />
            </View>

            {result && <Text style={styles.result}>{result}</Text>}

            <View style={styles.buttonContainer}>
                <Button title="Traducir" onPress={handleTranslate} />
            </View>
        </>
    );
};

export default Translator;
