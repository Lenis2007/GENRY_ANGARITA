import { mAkm } from "./mAkm.js";
import { mainMenu } from "../../main.js"
import { dmAm } from "./dmAm.js";


export function menuLongitud() {
    let seleccion = parseInt(prompt(`Digite:
    1. Para convertir m a km.
    2. Para convertir dm a m.
    0. Para devolverse.`));
    switch (seleccion) {
        case 1:
            mAkm();
            break;
        case 2:
            dmAm();
            break;
        case 0:
            mainMenu();
            break;
        default:
            break;
    }
}