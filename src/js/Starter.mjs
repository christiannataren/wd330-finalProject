import Buttons from "./Buttons.mjs";
import { loadFooter, loadHeader } from "./dinamic-filling.mjs";
export default class Starter {
    constructor() {

        loadHeader();
        loadFooter();
        new Buttons();
    }

}