import {mainMenu} from "../../main.js"
import { menuAritmetica } from "./submenu_a.js";
import {suma} from "./suma.js"

export function con_suma(num1, num2, resultado) {
    let mensajeResultado = `La suma de ${num1} + ${num2} es ${resultado}

    Digite:
    1. Para sumar nuevamente.
    2. Para volver al menú de aritmética.
    3. Para volver al menú principal.
    4. Para salir.`;
    let menu = parseInt(prompt(mensajeResultado));
    switch (menu) {
        case 1:
            suma()
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