import{con_sgAh} from './con_sgAh.js'
import { validadorNumero } from '../VALIDADOR/validar_numero.js';

export function sgAh() {
    let sg = parseFloat(prompt("Ingrese los segundos para convertir a hora/s: "));
    if (validadorNumero(sg)) {
        let resultado = sg/3600;
        con_sgAh(sg,resultado)
    }
}