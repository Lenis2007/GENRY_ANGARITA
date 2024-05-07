import {mainMenu} from "../../main.js"
import {sgAmin} from "./sgAmin.js"
import { menuTiempo } from "./submenu_t.js";

export function con_sgAmin(sg, resultado) {
    let mensajeResultado = `${sg} sg en minutos son ${resultado} min.

    Digite:
    1. Para convertir nuevamente segundos a minutos.
    2. Para volver al menú tiempo.
    3. Para volver al menú principal.
    4. Para salir.`;
    let menu = parseInt(prompt(mensajeResultado));
    switch (menu) {
        case 1:
            sgAmin()
            break;
        case 2:
            menuTiempo()
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