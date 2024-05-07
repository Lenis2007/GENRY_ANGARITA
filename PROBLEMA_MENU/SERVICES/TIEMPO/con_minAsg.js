import {mainMenu} from "../../main.js"
import {minAsg} from "./minAsg.js"
import { menuTiempo } from "./submenu_t.js";

export function con_minAsg(min, resultado) {
    let mensajeResultado = `${min} min en segundos son ${resultado} sg

    Digite:
    1. Para convertir nuevamente minutos a segundos.
    2. Para volver al menú de tiempo.
    3. Para volver al menú principal.
    4. Para salir.`;
    let menu = parseInt(prompt(mensajeResultado));
    switch (menu) {
        case 1:
            minAsg()
            break;
        case 2:
            menuTiempo()
            break;
        case 3:
            mainMenu()
            break;
        case 3:
            break;
    
        default:
            break;
    }
}