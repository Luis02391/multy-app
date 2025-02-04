import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import styles from '../styles/MultiplyTableStyles';
import useMultiplication from '../hooks/useMultiplication';
import {Button} from "@rneui/themed";

const MultiplyTableScren: React.FC = () => {
    const {num, setNum, result, generateMultiplicationTable} = useMultiplication();

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Tabla de Multiplicar</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa un número"
                    keyboardType="numeric"
                    value={num}
                    onChangeText={setNum}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Generar Tabla" onPress={generateMultiplicationTable}/>
            </View>

            <ScrollView style={styles.scrollView}>
                {result.map((item, index) => (
                    <View key={index} style={styles.resultContainer}>
                        <Text style={styles.result}>{item}</Text>
                    </View>
                ))}
            </ScrollView>
        </>
    );
};

export default MultiplyTableScren;
