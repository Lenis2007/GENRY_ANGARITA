import {mainMenu} from "../../main.js"
import {hAsg} from "./hAsg.js"
import { menuTiempo } from "./submenu_t.js";

export function con_hAsg(h, resultado) {
    let mensajeResultado = `${h} h en segundos son ${resultado} sg.

    Digite:
    1. Para convertir nuevamente hora/s a segundos.
    2. Para volver al menú de tiempo.
    3. Para volver al menú principal.
    4. Para salir.`;
    let menu = parseInt(prompt(mensajeResultado));
    switch (menu) {
        case 1:
            hAsg()
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