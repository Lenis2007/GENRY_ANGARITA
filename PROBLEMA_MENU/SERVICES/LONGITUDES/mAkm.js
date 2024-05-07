import{con_mAkm} from './con_mAkm.js'
import { validadorNumero } from '../VALIDADOR/validar_numero.js';

export function mAkm() {
    let m = parseFloat(prompt("Ingrese m a convertir a kilometros: "));
    if (validadorNumero(m)) {
        let resultado = m/1000;
        con_mAkm(m,resultado)
    }
}