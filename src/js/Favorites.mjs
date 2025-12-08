import { Saver } from "./Saver.mjs";
import { Templates } from "./Templates.mjs";
import { Dog, Cat } from "./Animals.mjs";

export class Favorites {
    constructor(element) {
        this.likes = Saver.getLikes();
        this.element = element;

    }
    async init() {
        let wait = await this.loadFavorites();
        console.log(wait);
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
        console.log(`Favorites: ${this.favorites.length}`);
        this.element.innerHTML = "";
        if (this.favorites.length > 0) {
            this.favorites.map(animal => {
                this.element.insertAdjacentHTML("beforeend", Templates.favorite(animal));
            });
        } else {
            this.element.insertAdjacentHTML("beforeend", Templates.emptyFavorites());
        }


    }
}