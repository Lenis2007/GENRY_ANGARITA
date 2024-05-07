import{con_minAsg} from './con_minAsg.js'
import { validadorNumero } from '../VALIDADOR/validar_numero.js';

export function minAsg() {
    let min = parseFloat(prompt("Ingrese los minutos para convertir a segundos: "));
    if (validadorNumero(min)) {
        let resultado = min*60;
        con_minAsg(min,resultado)
    }
}