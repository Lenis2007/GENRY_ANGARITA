import{con_suma} from './con_suma.js'
import { validadorNumero } from '../VALIDADOR/validar_numero.js';

export function suma() {
    let num1 = parseFloat(prompt("Ingrese el primer número de la suma: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número de la suma: "));
    if (validadorNumero(num1) && validadorNumero(num2)){
        let resultado = num1 + num2;
        con_suma(num1, num2, resultado)
    }
}