import{con_division} from './con_division.js'
import { validadorNumero } from '../VALIDADOR/validar_numero.js';

export function division() {
    let num1 = parseFloat(prompt("Ingrese el primer número de la división: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número de la división: "));
    if (validadorNumero(num1) && validadorNumero(num2)) {
        let resultado = num1 / num2;
        con_division(num1, num2, resultado)
    }
}