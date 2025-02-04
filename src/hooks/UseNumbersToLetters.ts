const UseNumbersToLetters = (num: number): string => {
    const units: string[] = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const teens: string[] = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
    const tens: string[] = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const hundreds: string[] = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

    if (num === 0) return "cero";
    if (num < 10) return units[num];
    if (num >= 10 && num < 20) return teens[num - 10];
    if (num >= 20 && num < 100) {
        const tenPart = Math.floor(num / 10);
        const unitPart = num % 10;
        return `${tens[tenPart]}${unitPart ? " y " + units[unitPart] : ""}`;
    }
    if (num >= 100 && num < 1000) {
        const hundredPart = Math.floor(num / 100);
        const remainder = num % 100;
        return `${hundreds[hundredPart]}${remainder ? " " + UseNumbersToLetters(remainder) : ""}`;
    }
    if (num === 1000) return "mil";
    return "Número fuera de rango";
};

export default UseNumbersToLetters;
