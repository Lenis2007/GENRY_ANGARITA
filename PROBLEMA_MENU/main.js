import { menuAritmetica } from './SERVICES/ARITMÉTICA/submenu_a.js';
import { menuLongitud } from './SERVICES/LONGITUDES/submenues_l.js';
import { menuTiempo } from './SERVICES/TIEMPO/submenu_t.js';


export function mainMenu(params) {
    let seleccion = parseInt(prompt(`Bienvenid@ a nuestra aplicación científica: 
    Digite:
    1. Para convertir unidades de longitud.
    2. Para operaciones aritméticas. 
    3. Para convertir unidades de tiempo.
    0. Para salir.`));

    switch (seleccion) {
        case 1: menuLongitud();

            break;

        case 2: menuAritmetica();

            break;

        case 3: menuTiempo();

            break;

        case 0:

            break;

        default:
            mainMenu()
    }
}

mainMenu();