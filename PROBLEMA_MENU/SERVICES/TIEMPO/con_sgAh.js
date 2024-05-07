import {mainMenu} from "../../main.js"
import {sgAh} from "./sgAh.js"
import { menuTiempo } from "./submenu_t.js";

export function con_sgAh(sg, resultado) {
    let mensajeResultado = `${sg} sg en hora/s son ${resultado} h.

    Digite:
    1. Para convertir nuevamente segundos a hora/s.
    2. Para volver al menú de tiempo.
    3. Para volver al menú principal.
    4. Para salir.`;
    let menu = parseInt(prompt(mensajeResultado));
    switch (menu) {
        case 1:
            sgAh()
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