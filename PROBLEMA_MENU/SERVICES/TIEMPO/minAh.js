import{con_minAh} from './con_minAh.js'
import { validadorNumero } from '../VALIDADOR/validar_numero.js';

export function minAh() {
    let min = parseFloat(prompt("Ingrese los minutos para convertir a hora/s: "));
    if (validadorNumero(min)) {
        let resultado = min/60;
        con_minAh(min,resultado)
    }
}