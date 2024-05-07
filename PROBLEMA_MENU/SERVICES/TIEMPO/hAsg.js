import{con_hAsg} from './con_hAsg.js'
import { validadorNumero } from '../VALIDADOR/validar_numero.js';

export function hAsg() {
    let h = parseFloat(prompt("Ingrese la/s hora/s para convertir a segundos: "));
    if (validadorNumero(h)) {
        let resultado = h*3600;
        con_hAsg(h,resultado)
    }
}