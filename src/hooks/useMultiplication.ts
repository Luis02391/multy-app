import {useState} from 'react';

const useMultiplication = () => {
    const [num, setNum] = useState<string>('');
    const [result, setResult] = useState<string[]>([]);

    const generateMultiplicationTable = () => {
        const number = parseInt(num, 10);
        if (!isNaN(number)) {
            const table = [];
            for (let i = 1; i <= 13; i++) {
                table.push(`${number} x ${i} = ${number * i}`);
            }
            setResult(table);
        } else {
            setResult(["Por favor ingresa un número válido"]);
        }
    };

    return {num, setNum, result, generateMultiplicationTable};
};

export default useMultiplication;
