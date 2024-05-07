import{con_dmAm} from './con_dmAm.js'
import { validadorNumero } from '../VALIDADOR/validar_numero.js';

export function dmAm() {
    let dm = parseFloat(prompt("Ingrese dm a convertir a metros: "));
    if (validadorNumero(dm)) {
        let resultado = dm*0.1;
        con_dmAm(dm,resultado)
    }
}