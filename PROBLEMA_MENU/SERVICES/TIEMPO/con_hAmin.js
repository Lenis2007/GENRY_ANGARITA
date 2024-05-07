import {mainMenu} from "../../main.js"
import {hAmin} from "./hAmin.js"
import { menuTiempo } from "./submenu_t.js";

export function con_hAmin(h, resultado) {
    let mensajeResultado = `${h} h en minutos son ${resultado} min.

    Digite:
    1. Para convertir nuevamente hora/s a minutos.
    2. Para volver al menú de tiempo.
    3. Para volver al menú principal.
    4. Para salir.`;
    let menu = parseInt(prompt(mensajeResultado));
    switch (menu) {
        case 1:
            hAmin()
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