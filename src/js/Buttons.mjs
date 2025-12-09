import { Saver } from "./Saver.mjs";
import { battle, favorites } from "./Starter.mjs";
export default class Buttons {
    constructor() {
        document.addEventListener("click", function (event) {
            let action = event.target.dataset.action;
            if (action == null) {

                return; //no Button
            }
            let button = event.target;
            switch (action) {
                case "nav-li":
                    button.querySelector("a").click();

                    break;
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
                    setTimeout(function () {
                        battle.start();
                    }, 1000);
                    break;
                case "show-more":
                    let id = button.dataset.id;
                    favorites.showFavorite(id);

                    break;
                case "close-dialog":
                    document.querySelector("dialog").close();

                    break;
            }
        });
    }
}