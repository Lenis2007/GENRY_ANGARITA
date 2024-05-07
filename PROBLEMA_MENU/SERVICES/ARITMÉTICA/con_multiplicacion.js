import {mainMenu} from "../../main.js"
import {multiplicacion} from "./multiplicacion.js"
import { menuAritmetica } from "./submenu_a.js";

export function con_multiplicacion(num1, num2, resultado) {
    let mensajeResultado = `La multiplicación de ${num1} * ${num2} es ${resultado}

    Digite:
    1. Para multiplicar nuevamente.
    2. Para volver al menú de aritmética.
    3. Para volver al menú principal.
    4. Para salir.`;
    let menu = parseInt(prompt(mensajeResultado));
    switch (menu) {
        case 1:
            multiplicacion()
            break;
        case 2:
            menuAritmetica()
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