import { Saver } from "./Saver.mjs";
import { battle } from "./Starter.mjs";
export default class Buttons {
    constructor() {
        document.addEventListener("click", function (event) {
            console.log("Clicking button");

            let action = event.target.dataset.action;
            if (action == null) {

                return; //no Button
            }
            let button = event.target;
            switch (action) {
                case "favs":
                    window.location.href = "/favorites/";

                    break;
                case "re-start":
                    battle.start();
                    break;
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
                    }, 1000);
            }
        });
    }
}