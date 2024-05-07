import{con_multiplicacion} from './con_multiplicacion.js'
import { validadorNumero } from '../VALIDADOR/validar_numero.js';

export function multiplicacion() {
    let num1 = parseFloat(prompt("Ingrese el primer número de la multiplicación: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número de la multiplicación: "));
    if (validadorNumero(num1) && validadorNumero(num2)) {
        let resultado = num1 * num2;
        con_multiplicacion(num1, num2, resultado)
    }
}