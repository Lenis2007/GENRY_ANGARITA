import {mainMenu} from "../../main.js"
import {minAh} from "./minAh.js"
import { menuTiempo } from "./submenu_t.js";

export function con_minAh(min, resultado) {
    let mensajeResultado = `${min} min en hora/s son ${resultado} h.

    Digite:
    1. Para convertir nuevamente minutos a hora/s.
    2. Para volver al menú de tiempo.
    3. Para volver al menú principal.
    4. Para salir.`;
    let menu = parseInt(prompt(mensajeResultado));
    switch (menu) {
        case 1:
            minAh()
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