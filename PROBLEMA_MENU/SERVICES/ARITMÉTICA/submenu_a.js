import { mainMenu } from "../../main.js"
import { suma } from "./suma.js"
import {resta} from "./resta.js"
import { multiplicacion } from "./multiplicacion.js";
import { division } from "./division.js";

export function menuAritmetica() {
    let seleccion = parseInt(prompt(`Digite:
    1. Suma.
    2. Resta.
    3. Multiplicación.
    4. División.
    0. Para devolverse.`));
    switch (seleccion) {
        case 1:
            suma();
            break;
        case 2:
            resta();
            break;
        case 3:
            multiplicacion();
            break;
        case 4:
            division();
            break;
        case 0:
            mainMenu();
            break;
        default:
            break;
    }
}