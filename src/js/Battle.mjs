import { Cat, Dog } from "./Animals.mjs";
import { Templates } from "./Templates.mjs";
import { Saver } from "./Saver.mjs";
export class Battle {
    constructor(screen) {
        this.screen = screen;

        this.cat = new Cat();
        this.dog = new Dog();
    }
    async verifyWinner() {
        if (Saver.getLikes().length >= 11) {
            let likes = Saver.getLikes();
            let dogs = likes.filter(animal => animal.type == "dog");
            let cats = likes.filter(animal => animal.type == "cat");
            console.log(dogs);
            console.log(cats);
        }

        return false;
    }
    async start() {
        this.verifyWinner();

        this.loading();
        let cat = await this.cat.get();
        let dog = await this.dog.get();
        try {
            cat[0].breeds[0];
            dog[0].breeds[0].name;
        } catch {
            this.error();
        }
        this.loadOptions(cat, dog);
    }

    loading() {
        this.addToScreen(Templates.loading());
    }
    error() {
        this.addToScreen(Templates.errorView());

    }
    addToScreen(html) {
        this.screen.innerHTML = html;

    }

    loadOptions(cat, dog) {
        let options = null;
        try {
            options = Templates.catDog(cat, dog);
        } catch { }
        if (options == null) {
            this.error();
            return;
        }
        this.addToScreen(options);

    }


}