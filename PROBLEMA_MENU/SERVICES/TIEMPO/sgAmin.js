import{con_sgAmin} from './con_sgAmin.js'
import { validadorNumero } from '../VALIDADOR/validar_numero.js';

export function sgAmin() {
    let sg = parseFloat(prompt("Ingrese los segundos para convertir a minutos: "));
    if (validadorNumero(sg)) {
        let resultado = sg/60;
        con_sgAmin(sg,resultado)
    }
}