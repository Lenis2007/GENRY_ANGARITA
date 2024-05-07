export function validadorNumero(numero) {
    if (typeof numero === "number" && numero >= 0){
        return true;
    }
    return false;
}