import { minAsg } from "./minAsg.js";
import { mainMenu } from "../../main.js"
import { minAh } from "./minAh.js";
import { sgAmin } from "./sgAmin.js";
import { sgAh } from "./sgAh.js";
import { hAmin } from "./hAmin.js";
import { hAsg } from "./hAsg.js";


export function menuTiempo() {
    let seleccion = parseInt(prompt(`Digite:
    1. Para convertir minutos a segundos.
    2. Para convertir minutos a horas.
    3. Para convertir segundos a minutos.
    4. Para convertir segundos a horas.
    5. Para convertir horas a minutos.
    6. Para convertir horas a segundos.
    0. Para devolverse.`));
    switch (seleccion) {
        case 1:
            minAsg();
            break;
        case 2:
           minAh();
            break;
        case 3:
           sgAmin();
            break;
        case 4:
           sgAh();
            break;
        case 5:
           hAmin();
            break;
        case 6:
           hAsg();
            break;
        case 0:
            mainMenu();
            break;
        default:
            break;
    }
}