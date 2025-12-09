import { Saver } from "./Saver.mjs";
import { Templates } from "./Templates.mjs";
import { Dog, Cat } from "./Animals.mjs";

export class Favorites {
    constructor(element) {
        this.likes = Saver.getLikes();
        this.element = element;

    }
    init() {
        this.loadFavorites();
    }

    getDataId(id) {
        return this.favorites.filter((favorite) => favorite.data.id == id)[0].data;
    }
    showFavorite(id) {
        let data = null;
        try {
            data = this.getDataId(id);
        } catch { }
        if (data == null) {
            return;
        }
        let content = document.querySelector("#dialog-content");
        content.innerHTML = Templates.showMore(data);
        let dialog = document.querySelector("dialog");

        dialog.showModal();
    }

    async loadFavorites() {
        let mapping = await this.likes.map(async function (fav) {
            let cat = new Cat();
            let dog = new Dog();
            let data = "";
            switch (fav.type) {
                case "cat":
                    data = await cat.getAnimal(fav.id);
                    break;
                case "dog":
                    data = await dog.getAnimal(fav.id);
                    break;
            }
            let info = { "type": fav.type, "data": data };
            return info;
        })
        this.favorites = await Promise.all(mapping);
        this.element.innerHTML = "";
        if (this.favorites.length > 0) {
            let template = document.createElement("div");
            let animal = "cat";
            let dogN = this.favorites.reduce((acc, item) => {
                if (item.type == "dog") {
                    acc = acc + 1;
                }
                return acc;
            }, 0);
            let catN = this.favorites.reduce((acc, item) => {
                if (item.type == "cat") {
                    acc = acc + 1;
                }
                return acc;
            }, 0);
            if (dogN > catN) {
                animal = "dog";
            }
            template.innerHTML = Templates.results(animal);
            let result = template.querySelector(".result");
            result.removeChild(result.querySelector("button"));
            result.removeChild(result.querySelector("button"));
            result.classList.add("fav-container");
            this.element.insertAdjacentHTML("afterbegin", template.innerHTML);
            this.favorites.map(animal => {

                this.element.insertAdjacentHTML("beforeend", Templates.favorite(animal));
            });
        } else {
            this.element.insertAdjacentHTML("beforeend", Templates.emptyFavorites());
        }


    }
}