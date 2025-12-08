import Buttons from "./Buttons.mjs";
import { loadFooter, loadHeader } from "./dinamic-filling.mjs";
import { getLocation } from "./Utils.mjs";
export let battle = undefined;
import { Battle } from "./Battle.mjs";
export default class Starter {
    constructor(file) {
        loadHeader(file);
        loadFooter();
        new Buttons();
        this.parseLocation();
    }

    parseLocation() {
        let location = getLocation();
        if (location == "/" || location == "index.html") {
            battle = new Battle(document.querySelector("#battle"));
        }
    }

}