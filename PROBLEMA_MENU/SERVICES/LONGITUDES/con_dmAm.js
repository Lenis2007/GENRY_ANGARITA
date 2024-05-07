import {mainMenu} from "../../main.js"
import {dmAm} from "./dmAm.js"
import { menuLongitud } from "./submenues_l.js";

export function con_dmAm(dm, resultado) {
    let mensajeResultado = `${dm} dm en kilometros son ${resultado} metros

    Digite:
    1. Para convertir nuevamente dm a m.
    2. Para volver al menú de longitud.
    3. Para volver al menú principal.
    4. Para salir.`;
    let menu = parseInt(prompt(mensajeResultado));
    switch (menu) {
        case 1:
            dmAm()
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