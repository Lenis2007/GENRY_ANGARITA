import {con_resta} from './con_resta.js'
import { validadorNumero } from '../VALIDADOR/validar_numero.js';

export function resta() {
    let num1 = parseFloat(prompt("Ingrese el primer número de la resta: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número de la resta: "));
    if (validadorNumero(num1) && validadorNumero(num2)) {
        let resultado = num1 - num2;
        con_resta(num1, num2, resultado)
    }
}