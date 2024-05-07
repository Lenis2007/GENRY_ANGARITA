import {mainMenu} from "../../main.js"
import {mAkm} from "./mAkm.js"
import { menuLongitud } from "./submenues_l.js";

export function con_mAkm(m, resultado) {
    let mensajeResultado = `${m} m en kilometros son ${resultado} kilometros

    Digite:
    1. Para convertir nuevamente m a km.
    2. Para volver al menú de longitud.
    3. Para volver al menú principal.
    4. Para salir.`;
    let menu = parseInt(prompt(mensajeResultado));
    switch (menu) {
        case 1:
            mAkm()
            break;
        case 2:
            menuLongitud()
            break;
        case 3:
            mainMenu()
            break;
        case 4:
            break;
    
        default:
            break;
    }
}