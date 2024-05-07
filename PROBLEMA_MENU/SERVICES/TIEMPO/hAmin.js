import{con_hAmin} from './con_hAmin.js'
import { validadorNumero } from '../VALIDADOR/validar_numero.js';

export function hAmin() {
    let h = parseFloat(prompt("Ingrese la/s hora/s para convertir a minutos: "));
    if (validadorNumero(h)) {
        let resultado = h*60;
        con_hAmin(h,resultado)
    }
}