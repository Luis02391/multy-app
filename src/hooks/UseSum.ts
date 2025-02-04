import {useState} from "react";

export default function useSum() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [sum, setSum] = useState<number | null>(null);

    const handleSum = () => {
        const sumResult = parseFloat(num1) + parseFloat(num2);
        setSum(sumResult);
    };

    return {num1, setNum1, num2, setNum2, sum, handleSum};
}
