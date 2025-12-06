import { Saver } from "./Saver.mjs";
import { battle } from "./Starter.mjs";
export default class Buttons {
    constructor() {
        document.addEventListener("click", function (event) {

            let action = event.target.getAttribute("data-action");
            if (action == null) {

                return; //no Button
            }
            let button = event.target;
            switch (action) {
                case "start":
                    Saver.resetLikes();
                    battle.start();
                    break;

                case "like":
                    document.querySelector(`#${button.dataset.type}`).classList.add("choosen");
                    button.classList.add("choosen");
                    Saver.saveLike(button.dataset.type, button.dataset.id);
                    console.table(Saver.getLikes());
                    setTimeout(function () {
                        battle.start();
                        document.querySelector("h2").scrollIntoView({ behavior: "smooth", block: "center" });
                    }, 1000);
            }
        });
    }
}